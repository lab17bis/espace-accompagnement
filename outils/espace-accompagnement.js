window.SPEC_ACCOMPAGNEMENT = (function () {
  var W = 'https://lab17bis.github.io/';
  var graine = 11; function hasard() { graine = (graine * 16807) % 2147483647; return graine / 2147483647; }
  function pioche(t) { return t[Math.floor(hasard() * t.length)]; }
  var J = 86400, auj = Math.floor(Date.now() / 86400000) * J;
  var TYPES_STRUCTURE = ['Établissement', 'Service', 'Équipe', 'Collectivité', 'Partenaire', 'Autre'];
  var TYPES = ['Conseil', 'Animation', 'Accompagnement', 'Formation'];
  var offre = [
    { titre: 'Conseil ponctuel', type: 'Conseil', resume: 'Un échange pour clarifier une question et repartir avec des pistes concrètes.', description: 'Un rendez-vous d\'une heure, sur place ou à distance, pour prendre du recul sur une situation et identifier les prochaines étapes.', duree: 'Moins d\'une heure', public: 'Une personne ou un binôme', apport: 'Des pistes d\'action et des ressources adaptées.', modalites: 'Prendre rendez-vous.\nPréciser la question en quelques lignes.\nÉchanger une heure.', publie: true },
    { titre: 'Animation d\'atelier', type: 'Animation', resume: 'La conception et l\'animation d\'un temps collectif pour faire émerger des idées ou décider ensemble.', description: 'Nous concevons avec vous le déroulé, préparons les supports et animons la séance.', duree: 'Demi-journée', public: '6 à 30 personnes', apport: 'Un temps de travail productif et une production partagée.', modalites: 'Cadrer l\'objectif.\nConcevoir le déroulé.\nAnimer.\nRestituer.', publie: true },
    { titre: 'Accompagnement de projet', type: 'Accompagnement', resume: 'Un appui dans la durée, de la définition du besoin jusqu\'aux premiers essais.', description: 'Plusieurs séances réparties sur quelques mois, avec des points d\'étape réguliers.', duree: 'Plusieurs mois', public: 'Une équipe projet', apport: 'Un projet mieux cadré et testé auprès des personnes concernées.', modalites: 'Diagnostic partagé.\nFeuille de route.\nAteliers et tests.\nBilan.', publie: true },
    { titre: 'Formation-action', type: 'Formation', resume: 'Se former à une méthode en l\'appliquant à son propre sujet.', description: 'Une alternance d\'apports et de mises en pratique sur un cas réel apporté par les participants.', duree: 'Journée', public: '8 à 15 personnes', apport: 'Une méthode maîtrisée et un premier livrable.', modalites: 'Apports.\nMise en pratique.\nRetours croisés.', publie: true },
    { titre: 'Diagnostic d\'un service', type: 'Conseil', resume: 'Un regard extérieur sur le fonctionnement d\'un service, avec les personnes concernées.', description: 'Entretiens, observation et restitution collective des constats et des pistes.', duree: 'Plusieurs semaines', public: 'Un service', apport: 'Des constats partagés et des priorités.', modalites: 'Entretiens.\nObservation.\nRestitution.', publie: false }
  ];
  var contacts = [];
  var P = [['Camille', 'MARTIN', 'Cheffe de service', 'Service des ressources humaines'], ['Dominique', 'BERNARD', 'Chargé de mission', 'Direction de la communication'], ['Alex', 'PETIT', 'Directeur d\'établissement', 'Établissement A'], ['Sacha', 'DURAND', 'Adjointe', 'Service des affaires financières'], ['Morgan', 'LEROY', 'Coordonnateur', 'Réseau B'], ['Charlie', 'MOREAU', 'Responsable', 'Pôle numérique'], ['Lou', 'SIMON', 'Inspectrice', 'Corps d\'inspection'], ['Noa', 'LAURENT', 'Gestionnaire', 'Service des examens'], ['Eden', 'MICHEL', 'Conseillère', 'Mission égalité'], ['Maxime', 'GARCIA', 'Chef de projet', 'Partenaire C']];
  // Structures (table de l'annuaire) : une par structure citée par les contacts.
  var structures = [], noms = [];
  P.forEach(function (p) { if (noms.indexOf(p[3]) < 0) { noms.push(p[3]); structures.push({ Nom: p[3], Sigle: '', Type: /^Établissement|^Réseau|^Partenaire/.test(p[3]) ? (/^Partenaire/.test(p[3]) ? 'Partenaire' : 'Établissement') : 'Service' }); } });
  P.forEach(function (p) { contacts.push({ Nom: p[1] + ' ' + p[0], Fonction: p[2], Structure: noms.indexOf(p[3]) + 1, Email: (p[0] + '.' + p[1]).toLowerCase() + '@exemple.fr', Telephone_fixe: '', Notes: '' }); });
  var OBJETS = ['Préparer un séminaire d\'équipe', 'Repenser l\'accueil du public', 'Lancer une démarche participative', 'Simplifier une procédure interne', 'Former une équipe à l\'animation', 'Faire émerger des idées pour un projet', 'Préparer une réorganisation', 'Mieux suivre les demandes reçues', 'Construire une feuille de route', 'Évaluer un dispositif'];
  var STATUTS = ['Reçue', 'Qualifiée', 'En cours', 'Réalisée', 'Close', 'Sans suite'];
  var CANAUX = ['Courriel', 'Téléphone', 'Rencontre', 'Formulaire'];
  var SUIVI = ['Personne A', 'Personne B'];
  var soll = [];
  for (var i = 0; i < 22; i++) {
    var age = Math.floor(hasard() * 200), st = age > 120 ? pioche(['Close', 'Close', 'Réalisée', 'Sans suite']) : age > 45 ? pioche(['En cours', 'Réalisée', 'Close']) : pioche(['Reçue', 'Qualifiée', 'En cours']);
    soll.push({ Objet: OBJETS[i % OBJETS.length], Contact: 1 + (i * 3) % contacts.length, Offre: 1 + Math.floor(hasard() * 4), Recue_le: auj - age * J, Canal: pioche(CANAUX), Statut: st, Suivie_par: pioche(SUIVI),
      Prochaine_etape: ['Close', 'Sans suite', 'Réalisée'].indexOf(st) >= 0 ? '' : pioche(['Proposer une date', 'Envoyer le déroulé', 'Point d\'étape', 'Envoyer le questionnaire de satisfaction']),
      Echeance: ['Close', 'Sans suite'].indexOf(st) >= 0 ? null : auj + (Math.floor(hasard() * 30) - 10) * J, Notes: '' });
  }
  var satis = [];
  soll.forEach(function (s, k) {
    if (['Réalisée', 'Close'].indexOf(s.Statut) < 0) { return; }
    var n = Math.min(5, Math.max(2, Math.round(3.2 + hasard() * 2)));
    satis.push({ Courriel: contacts[s.Contact - 1].Email, Offre: offre[s.Offre - 1].titre, Note: n, Utilite: Math.min(5, n + (hasard() < 0.3 ? -1 : 0)), Commentaire: pioche(['Très utile, merci.', 'Des supports clairs.', 'Un peu court.', '', 'Nous referons appel à vous.', '']), Recu_le: s.Recue_le + 40 * J });
  });
  var q = function (id, col, type, libelle, aff, o) { return Object.assign({ id: id, genre: 'question', colonne: col, type: type, libelle: libelle, aide: '', obligatoire: false, affichage: aff }, o || {}); };
  var questionnaire = { version: 1, titre: 'Votre avis sur notre accompagnement', introduction: 'Merci de prendre deux minutes pour nous dire ce que vous en avez pensé.',
    page: { marque: 'République\nfrançaise', titre: 'Nom du service', sousTitre: '', boutons: [], pied: { accessibilite: 'non conforme' } },
    envoi: { bouton: 'Envoyer', titreConfirmation: 'Merci pour votre retour', messageConfirmation: 'Votre avis a bien été enregistré.', autreReponse: false },
    mentionObligatoire: 'asterisque', mentionsDonnees: 'Vos réponses servent uniquement à améliorer notre accompagnement.',
    etapes: [{ id: 'e1', titre: 'Votre avis', description: '', condition: null, elements: [
      q('q1', 'Offre', 'Choice', 'Quelle prestation avez-vous suivie ?', 'liste', { obligatoire: true, choix: offre.map(function (o) { return o.titre; }) }),
      q('q2', 'Note', 'Int', 'Êtes-vous satisfait de l\'accompagnement ?', 'echelle', { obligatoire: true, min: 1, max: 5, libelleMin: 'Pas du tout', libelleMax: 'Tout à fait' }),
      q('q3', 'Utilite', 'Int', 'Ce que vous en retirez vous sera-t-il utile ?', 'echelle', { min: 1, max: 5, libelleMin: 'Pas du tout', libelleMax: 'Tout à fait' }),
      q('q4', 'Commentaire', 'Text', 'Un commentaire, une suggestion ?', 'long'),
      q('q5', 'Courriel', 'Text', 'Votre adresse électronique', 'courriel', { aide: 'Facultatif. Elle permet de rattacher votre avis à votre demande.' })
    ] }] };
  var catalogue = { version: 1, page: { marque: 'République\nfrançaise', titre: 'Nom du service', sousTitre: 'Notre offre de service', boutons: [{ libelle: 'Nous solliciter', lien: 'mailto:contact@exemple.fr?subject={titre}', style: 'principal' }], pied: { accessibilite: 'non conforme' } },
    titre: 'Notre offre de service', introduction: 'Conseil, animation, accompagnement de projet, formation : choisissez ce qui correspond à votre besoin.',
    elements: { singulier: 'prestation', pluriel: 'prestations', feminin: true },
    colonnes: { titre: 'titre', resume: 'resume', description: 'description', publie: 'publie' },
    sections: { colonne: 'type', ordre: TYPES, libelleTout: 'Tout' },
    filtres: [{ colonne: 'duree', libelle: 'Durée' }],
    tris: [{ mode: 'alpha', libelle: 'Ordre alphabétique' }],
    etiquettes: [{ colonne: 'type', fond: '#000091', texte: '#FFFFFF' }],
    carte: { details: ['duree', 'public'] },
    fiche: { lienRetour: 'Retour à l\'offre de service', infos: [{ colonne: 'duree', libelle: 'Durée' }, { colonne: 'public', libelle: 'Public' }],
      blocs: [{ colonne: 'apport', titre: 'Ce que ça apporte', format: 'encadre' }, { colonne: 'description', titre: 'Présentation', format: 'texte' }, { colonne: 'modalites', titre: 'Comment ça se passe', format: 'etapes' }] } };
  var graphique = { version: 1, page: { marque: 'République\nfrançaise', titre: 'Suivi de l\'accompagnement', sousTitre: '', boutons: [], pied: { accessibilite: 'non conforme' } },
    tableaux: [{ id: 'suivi', titre: 'Sollicitations et satisfaction', introduction: 'Vue d\'ensemble des sollicitations reçues et des retours de satisfaction.', moisDebut: 1,
      filtres: [{ id: 'f1', colonne: 'Recue_le', libelle: 'Période' }, { id: 'f2', colonne: 'Suivie_par', libelle: 'Suivie par', libelleTous: 'Toutes les personnes' }],
      blocs: [
        { type: 'indicateur', titre: 'Sollicitations', table: 'Sollicitations', largeur: 3, mesures: [{ fonction: 'nombre' }], libelleValeur: 'reçues', tendance: { colonne: 'Recue_le', pas: 'mois' } },
        { type: 'indicateur', titre: 'En cours', table: 'Sollicitations', largeur: 3, mesures: [{ fonction: 'nombre' }], filtres: [{ colonne: 'Statut', operateur: 'parmi', valeur: ['Reçue', 'Qualifiée', 'En cours'] }], libelleValeur: 'à traiter ou en cours' },
        { type: 'indicateur', titre: 'Échéances dépassées', table: 'Sollicitations', largeur: 3, mesures: [{ fonction: 'nombre' }], filtres: [{ colonne: 'En_retard', operateur: 'vrai' }], libelleValeur: 'sollicitations', seuils: { sens: 'baisse', alerte: 1, critique: 3 } },
        { type: 'indicateur', titre: 'Satisfaction', table: 'Satisfaction', largeur: 3, mesures: [{ fonction: 'moyenne', colonne: 'Note' }], format: { unite: 'sur 5', decimales: 1 }, libelleValeur: 'note moyenne', seuils: { sens: 'hausse', alerte: 3.5, critique: 3 } },
        { type: 'graphique', forme: 'barres', titre: 'Sollicitations par mois', sousTitre: 'Par type de prestation', table: 'Sollicitations', largeur: 8, axe: { colonne: 'Recue_le', pas: 'mois' }, series: { colonne: 'Type_offre' }, empile: 'oui', mesures: [{ fonction: 'nombre' }] },
        { type: 'graphique', forme: 'anneau', titre: 'Statut', table: 'Sollicitations', largeur: 4, axe: { colonne: 'Statut', tri: 'choix' }, mesures: [{ fonction: 'nombre' }] },
        { type: 'graphique', forme: 'barres-h', titre: 'Prestations les plus demandées', table: 'Sollicitations', largeur: 6, axe: { colonne: 'Prestation' }, mesures: [{ fonction: 'nombre' }] },
        { type: 'graphique', forme: 'barres', titre: 'Satisfaction par prestation', table: 'Satisfaction', largeur: 6, axe: { colonne: 'Offre' }, mesures: [{ fonction: 'moyenne', colonne: 'Note', libelle: 'Note moyenne' }] },
        { type: 'tableau', mode: 'liste', titre: 'Prochaines échéances', table: 'Sollicitations', largeur: 12, colonnesListe: ['Echeance', 'Objet', 'Contact_nom', 'Prochaine_etape', 'Suivie_par'], filtres: [{ colonne: 'Echeance', operateur: 'rempli' }, { colonne: 'Statut', operateur: 'parmi', valeur: ['Reçue', 'Qualifiée', 'En cours'] }], triListe: 'Echeance', ordreListe: 'asc', limite: 8 }
      ] }] };
  var DF = { dateFormat: 'DD/MM/YYYY' };
  return { nom: 'espace-accompagnement – démonstration (données fictives)', tables: {
      Offre: { colonnes: [{ id: 'titre', label: 'Titre' }, { id: 'type', type: 'Choice', label: 'Type', choices: TYPES }, { id: 'resume', label: 'En bref' }, { id: 'description', label: 'Présentation' },
        { id: 'duree', type: 'Choice', label: 'Durée', choices: ['Moins d\'une heure', 'Demi-journée', 'Journée', 'Plusieurs semaines', 'Plusieurs mois'] }, { id: 'public', label: 'Public' }, { id: 'apport', label: 'Ce que ça apporte' },
        { id: 'modalites', label: 'Comment ça se passe' }, { id: 'publie', type: 'Bool', label: 'Publiée' },
        { id: 'Nb_sollicitations', type: 'Int', label: 'Sollicitations', formula: 'len(Sollicitations.lookupRecords(Offre=$id))' },
        { id: 'Config_catalogue' }], lignes: offre },
      Structures: { colonnes: [{ id: 'Nom' }, { id: 'Sigle' }, { id: 'Type', type: 'Choice', choices: TYPES_STRUCTURE }, { id: 'Parent', type: 'Ref:Structures', label: 'Rattachée à', affiche: 'Nom' }], lignes: structures },
      Personnes: { colonnes: [{ id: 'Nom', label: 'Nom et prénom' }, { id: 'Email', label: 'Adresse électronique' }, { id: 'Structure', type: 'Ref:Structures', label: 'Structure de rattachement', affiche: 'Nom' }, { id: 'Fonction' }, { id: 'Telephone_fixe', label: 'Téléphone' }, { id: 'Notes' },
        { id: 'Sollicitations', type: 'Int', formula: 'len(Sollicitations.lookupRecords(Contact=$id))' },
        { id: 'Derniere_sollicitation', type: 'Date', label: 'Dernière sollicitation', formula: 'd = [s.Recue_le for s in Sollicitations.lookupRecords(Contact=$id) if s.Recue_le]\nreturn max(d) if d else None', options: DF },
        { id: 'Satisfaction', type: 'Numeric', label: 'Satisfaction moyenne', formula: 'e = ($Email or "").strip().lower()\nn = [s.Note for s in Satisfaction.lookupRecords(Cle=e) if s.Note] if e else []\nreturn round(sum(n) / float(len(n)), 1) if n else None' }], lignes: contacts },
      Sollicitations: { colonnes: [{ id: 'Objet' }, { id: 'Contact', type: 'Ref:Personnes', affiche: 'Nom' }, { id: 'Offre', type: 'Ref:Offre', label: 'Prestation demandée', affiche: 'titre' },
        { id: 'Recue_le', type: 'Date', label: 'Reçue le', formula: 'TODAY()', trigger: true, options: DF }, { id: 'Canal', type: 'Choice', choices: CANAUX },
        { id: 'Statut', type: 'Choice', choices: STATUTS, formula: '"Reçue"', trigger: true }, { id: 'Suivie_par', label: 'Suivie par', type: 'Choice', choices: SUIVI },
        { id: 'Prochaine_etape', label: 'Prochaine étape' }, { id: 'Echeance', type: 'Date', label: 'Échéance', options: DF }, { id: 'Notes' },
        { id: 'Contact_nom', label: 'Contact (nom)', formula: '$Contact.Nom' }, { id: 'Prestation', formula: '$Offre.titre' }, { id: 'Type_offre', label: 'Type de prestation', formula: '$Offre.type' },
        { id: 'Config_graphique' },
        { id: 'En_retard', type: 'Bool', label: 'Échéance dépassée', formula: 'bool($Echeance) and $Echeance < TODAY() and $Statut not in ("Réalisée", "Close", "Sans suite")' }], lignes: soll },
      Satisfaction: { colonnes: [{ id: 'Offre', type: 'Choice', label: 'Prestation', choices: offre.map(function (o) { return o.titre; }) }, { id: 'Note', type: 'Int' }, { id: 'Utilite', type: 'Int', label: 'Utilité' }, { id: 'Commentaire' }, { id: 'Courriel', label: 'Adresse électronique' },
        { id: 'Recu_le', type: 'DateTime:Europe/Paris', label: 'Reçu le', formula: 'NOW()', trigger: true, options: { dateFormat: 'DD/MM/YYYY', timeFormat: 'HH:mm' } },
        { id: 'Cle', label: 'Clé (calculée)', formula: '($Courriel or "").strip().lower()' },
        { id: 'Contact', type: 'Ref:Personnes', formula: 'Personnes.lookupOne(Email=$Cle) if $Cle else None', affiche: 'Nom' },
        { id: 'Config_questionnaire' }], lignes: satis }
    },
    reglages: [{ table: 'Offre', colonne: 'Config_catalogue', valeur: catalogue }, { table: 'Satisfaction', colonne: 'Config_questionnaire', valeur: questionnaire }, { table: 'Sollicitations', colonne: 'Config_graphique', valeur: graphique }],
    pages: [
      { nom: 'Sollicitations', table: 'Sollicitations', sections: [{ table: 'Sollicitations', type: 'single', titre: 'Fiche de la sollicitation', lien: { depuis: 'principale' } }] },
      { nom: 'Contacts', table: 'Personnes', sections: [{ cle: 'fiche', table: 'Personnes', type: 'single', titre: 'Fiche contact', lien: { depuis: 'principale' } }, { table: 'Sollicitations', type: 'record', titre: 'Ses sollicitations', lien: { depuis: 'principale', colonne: 'Contact' } }] },
      { nom: 'Annuaire', sections: [{ table: 'Personnes', type: 'custom', titre: 'Annuaire', url: W + 'grist-annuaire/v1/index.html' }] },
      { nom: 'Offre de service', sections: [{ table: 'Offre', type: 'custom', titre: 'Offre de service', url: W + 'grist-catalogue/v1/index.html' }] },
      { nom: 'Régler l\'offre de service', indent: 1, sections: [{ table: 'Offre', type: 'custom', titre: 'Éditeur du widget', url: W + 'grist-catalogue/v1/editeur.html' }] },
      { nom: 'Prestations', indent: 1, table: 'Offre' },
      { nom: 'Satisfaction', table: 'Satisfaction' },
      { nom: 'Questionnaire de satisfaction', indent: 1, sections: [{ table: 'Satisfaction', type: 'custom', titre: 'Éditeur du widget', url: W + 'grist-questionnaire/v1/editeur.html' }] },
      { nom: 'Indicateurs', sections: [{ table: 'Sollicitations', type: 'custom', titre: 'Indicateurs', url: W + 'grist-graphique/v1/index.html' }] },
      { nom: 'Éditeur des indicateurs', indent: 1, sections: [{ table: 'Sollicitations', type: 'custom', titre: 'Éditeur du widget', url: W + 'grist-graphique/v1/editeur.html' }] }
    ] };
})();
'ok';
