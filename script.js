const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];

function onScroll(){
  header?.classList.toggle('scrolled', window.scrollY > 8);
  const y = window.scrollY + 120;
  let current = 'accueil';
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  links.forEach(link => {
    const target = link.getAttribute('href')?.slice(1);
    const mapped = target === 'cv' ? 'cv' : target;
    link.classList.toggle('active', mapped === current);
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

menuToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
links.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
