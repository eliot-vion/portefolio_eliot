const missions = {
  'relation-client': {
    number: '01',
    title: 'Relation client',
    intro: 'Une partie du stage était consacrée à l’accueil et au suivi des clients, avec une dimension très concrète de service et d’organisation.',
    context: 'J’ai participé à l’accueil des clients, à la prise de rendez-vous et au suivi des demandes. Cette partie du stage faisait partie de mon rôle polyvalent au sein de l’entreprise.',
    detail: 'L’objectif était de garder un suivi clair des demandes et de contribuer au bon déroulement des échanges avec les clients. Cette activité m’a également demandé de m’adapter aux demandes rencontrées au quotidien.',
    tags: ['Accueil', 'Rendez-vous', 'Suivi des demandes'],
    proofs: []
  },
  'maintenance': {
    number: '02',
    title: 'Maintenance & assistance informatique',
    intro: 'J’ai également participé à la maintenance informatique et à l’assistance technique, avec du diagnostic et de la résolution de problèmes.',
    context: 'Mon rôle comprenait l’identification des problèmes rencontrés, la recherche d’une solution et l’assistance technique nécessaire pour remettre les équipements ou services en état de fonctionnement.',
    detail: 'Cette mission illustre le côté technicien de mon stage : observer le problème, comprendre son origine, intervenir puis vérifier que la solution répond au besoin. Les exemples précis pourront être détaillés à partir des preuves que j’ajouterai.',
    tags: ['Diagnostic', 'Maintenance', 'Assistance technique'],
    proofs: []
  },
  'terminaux-mobiles': {
    number: '03',
    title: 'Configuration & déploiement de terminaux mobiles',
    intro: 'J’ai configuré et déployé des terminaux mobiles afin de permettre le suivi des tickets des usagers.',
    context: 'Cette mission consistait à préparer les terminaux et à les déployer pour répondre au besoin de suivi des tickets des usagers. Elle s’inscrivait dans une logique de mise en service et d’accompagnement des utilisateurs.',
    detail: 'L’intérêt de cette activité était de rendre les terminaux directement utilisables dans le contexte prévu. Les étapes techniques précises, les modèles utilisés et les éventuels paramètres pourront être ajoutés ici avec mes captures et mes documents de stage.',
    tags: ['Terminaux mobiles', 'Configuration', 'Déploiement', 'Tickets'],
    proofs: []
  },
  'wifi': {
    number: '04',
    title: 'Infrastructure Wi‑Fi',
    intro: 'J’ai installé et configuré une infrastructure Wi‑Fi composée de 5 routeurs pour assurer la couverture réseau de différents espaces de l’établissement.',
    context: 'L’objectif était d’assurer la couverture réseau de plusieurs espaces, notamment les bureaux, les loges et les autres zones concernées par le besoin. J’ai participé à l’installation et à la configuration de cette infrastructure.',
    detail: 'Cette mission représente la partie réseau la plus importante de mon stage. Elle pourra être présentée de manière beaucoup plus technique avec le schéma de l’installation, la disposition des équipements, les paramètres retenus et les vérifications réalisées, dès que les preuves seront ajoutées.',
    tags: ['Wi‑Fi', 'Réseau', '5 routeurs', 'Infrastructure'],
    proofs: []
  }
};

const key = new URLSearchParams(window.location.search).get('id');
const mission = missions[key] || missions['relation-client'];

document.title = `${mission.title} — Eliot Vion`;

document.querySelector('#mission-detail').innerHTML = `
  <section class="detail-hero">
    <div class="container">
      <a class="back-link" href="index.html#stage">← Retour à la liste des missions</a>
      <div class="detail-meta"><span class="detail-number">${mission.number}</span><span class="status current-status">Stage · La Clinique du Mobile</span></div>
      <h1>${mission.title}</h1>
      <p class="lead">${mission.intro}</p>
    </div>
  </section>
  <section class="container detail-layout">
    <article class="detail-main">
      <h2>Ce que j’ai réalisé</h2>
      <p>${mission.context}</p>
      <h3>Déroulement de la mission</h3>
      <p>${mission.detail}</p>
      <div class="proofs">
        <div class="proof-head">
          <h2>Preuves de réalisation</h2>
          <p>Emplacements à compléter</p>
        </div>
        <div class="proof-grid">
          ${mission.proofs.map((proof, i) => `<div class="proof-card"><div class="proof-icon">${String(i+1).padStart(2,'0')}</div><strong>${proof}</strong><span>Preuve à ajouter ultérieurement</span></div>`).join('')}
        </div>
      </div>
    </article>
    <aside class="detail-side">
      <p class="label">COMPÉTENCES MOBILISÉES</p>
      <ul>${mission.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
      <p class="label" style="margin-top:30px">CONTEXTE</p>
      <p style="font-size:11px;color:#777b82;line-height:1.65">La Clinique du Mobile · Périgny<br>4 mai au 12 juin<br>Technicien · bras droit du responsable</p>
    </aside>
  </section>
`;
