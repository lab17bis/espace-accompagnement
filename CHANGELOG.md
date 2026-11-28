# Journal des modifications

Les fichiers de l'espace évoluent sans casser ce qui existe : un document déjà importé garde son fonctionnement.

## 2026-11-28 (noms des éditeurs)
- Les pages de réglage s'appellent désormais « Éditeur des indicateurs », « Éditeur des ressources », « Éditeur de l'offre de service », « Éditeur du questionnaire » (au lieu de « Régler … » et « Concevoir le questionnaire »), et chaque vue de configuration a pour titre « Éditeur du widget ». Fichiers .grist (vide et exemple) et README mis à jour ; aucune table ni aucun réglage ne change.

## 2026-11-26 (correctifs des widgets)

### Corrigé
- Correctifs des widgets utilisés par cet espace, pris en compte sans rien réinstaller (rechargez la page) :
  - style commun de configuration (grist-annuaire) : il ne masque plus que le badge « Enregistré » sur l'onglet de l'outil ;
  - grist-catalogue : « Vérifier l'accès public » explique précisément pourquoi un document n'est pas lisible (partage, règle d'accès, table introuvable, copie non enregistrée).

### Ajouté
- Brancher un outil sur un document qui a déjà ses propres tables (grist-annuaire) : si une table du même nom existe sans toutes les colonnes attendues, l'outil le signale et propose de les ajouter, avec le conseil de renommer d'abord une colonne qui porte la même information sous un autre nom. Rien à refaire dans cet espace : ses tables sont complètes.

## 2026-11-26 (questionnaire enrichi)

### Modifié
- Documentation : le widget grist-questionnaire sait maintenant classer par ordre (glisser-déposer), proposer un tableau de choix, un choix « Autre », des bornes de choix, une réponse par défaut, un ordre aléatoire, des types lien, heure et date et heure, et intégrer image, son, vidéo et PDF. Ces options sont facultatives et déjà disponibles dans cet espace (le widget est lu à l'adresse stable `/v1/`). Aucun changement dans les fichiers `.grist`.

## 2026-11-25 (annuaire)

### Ajouté
- Page **Annuaire** ([grist-annuaire](https://github.com/lab17bis/grist-annuaire)) : recherche des personnes et des structures, fiches, doublons et fusion, import CSV, archivage et délai de conservation.
- Tables `Structures` et `Comptes`, et règles d'accès de l'annuaire : rôle « gestionnaire de l'annuaire », aucune personne visible d'un visiteur anonyme.
- Dossier `outils/` : de quoi reconstruire l'espace dans un document Grist neuf.

### Modifié
- La table `Contacts` devient **`Personnes`**, pour que l'annuaire et les fiches contact partagent une seule liste de personnes. `Courriel` devient `Email`, `Telephone` devient `Telephone_fixe`, et `Structure` est maintenant une référence vers la table `Structures` au lieu d'un texte libre. La page *Contacts* est conservée.
- Ces changements ne touchent que les fichiers `.grist` de ce dépôt : un document déjà importé garde sa table `Contacts` et continue de fonctionner. Pour y brancher l'annuaire, importez le nouvel espace ou renommez la table et ses colonnes dans votre document.
