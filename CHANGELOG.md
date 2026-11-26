# Journal des modifications

Les fichiers de l'espace évoluent sans casser ce qui existe : un document déjà importé garde son fonctionnement.

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
