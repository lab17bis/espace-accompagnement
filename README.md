# espace-accompagnement

> **Espace Grist clé en main.** Un document Grist prêt à l'emploi pour **suivre les personnes qui sollicitent un service** : l'offre de service, chaque sollicitation et son avancement, une fiche par contact et les retours de satisfaction, au Système de design de l'État (DSFR).

Un **espace** est un document Grist complet — tables, formules, pages, widgets et réglages — à importer en une fois. Il assemble des widgets de la famille `grist-…` autour d'une manière de travailler. Chaque widget reste utilisable seul.

## À quoi ça sert

- **Présenter l'offre de service** dans un catalogue au DSFR, consultable dans Grist ou publiable en page publique.
- **Suivre chaque sollicitation** : qui la porte, la prestation demandée, son statut, la prochaine étape et son échéance. Les échéances dépassées sont signalées.
- **Retrouver une personne** : sa fiche contact rassemble ses coordonnées, toutes ses sollicitations et sa satisfaction moyenne. L'annuaire se construit au fil des sollicitations.
- **Recueillir la satisfaction** avec un questionnaire au DSFR (notes sur une échelle, commentaire). Une réponse est rattachée au contact par son adresse électronique.
- **Lire l'activité** dans un tableau de bord : sollicitations par mois et par prestation, statuts, satisfaction.

## Ce que contient l'espace

| Page | Outil | Contenu |
| --- | --- | --- |
| **Sollicitations** | tables Grist | Liste des sollicitations et fiche détaillée de la sollicitation choisie. Table `Sollicitations`. |
| **Contacts** | tables Grist | Liste des contacts, fiche contact et sollicitations de la personne choisie. Table `Contacts`. |
| **Offre de service** | [grist-catalogue](https://github.com/lab17bis/grist-catalogue) | Catalogue des prestations. Page *Prestations* pour les modifier, page *Régler l'offre de service* pour la présentation. Table `Offre`. |
| **Satisfaction** | [grist-questionnaire](https://github.com/lab17bis/grist-questionnaire) | Réponses reçues et page *Questionnaire de satisfaction* pour concevoir et publier le questionnaire. Table `Satisfaction`. |
| **Indicateurs** | [grist-graphique](https://github.com/lab17bis/grist-graphique) | Tableau de bord. Page *Régler les indicateurs* pour le modifier. |

## L'installer en 2 minutes

1. **Télécharger** le fichier de l'espace :
   - [`espace-accompagnement.grist`](https://github.com/lab17bis/espace-accompagnement/raw/main/espace-accompagnement.grist) : l'espace vide, prêt à l'usage ;
   - [`espace-accompagnement-exemple.grist`](https://github.com/lab17bis/espace-accompagnement/raw/main/espace-accompagnement-exemple.grist) : le même, rempli de données fictives, pour essayer.
2. **L'importer dans Grist** : depuis l'accueil de votre espace Grist, *Ajouter › Importer un document*, puis choisissez le fichier.
3. **L'ouvrir** : les pages et les widgets sont déjà en place. Si Grist le demande, confirmez l'accès complet des widgets au document.
4. **Inviter l'équipe** (*Partager*), en éditeur pour celles et ceux qui saisissent.

Vous êtes propriétaire du document importé. Rien n'est installé ailleurs : les widgets sont des pages web publiques, qui lisent et écrivent dans votre document avec les droits de la personne connectée.

Les widgets sont chargés depuis leur **adresse stable** (`…/v1/`) : une évolution d'un widget ne modifie pas votre espace sans que vous l'ayez décidé.

## Le régler

- **Listes** : statuts, canaux, personnes qui suivent (*Suivie par*) et types de prestation se modifient dans les colonnes de choix de Grist.
- **Offre de service** : remplacez les prestations d'exemple dans la page *Prestations*.
- **Questionnaire** : page *Questionnaire de satisfaction*, puis onglet *Publication* pour obtenir le lien à envoyer.
- **Indicateurs** : page *Régler les indicateurs*.

Les réglages sont enregistrés dans le document. Ils partagent les mêmes réglages d'en-tête et de pied de page.

## Données et droits d'accès

L'espace n'installe **aucune règle d'accès** : toute personne invitée dans le document voit toutes les sollicitations et tous les contacts. Les fiches contact contiennent des données personnelles : n'invitez que les personnes qui assurent le suivi, et adaptez au besoin les *Permissions avancées*.

Les tables `Personnes` et `Structures`, quand l'espace en contient, suivent la règle commune des widgets : un widget de la famille ajouté plus tard les reprend et les complète, au lieu d'en créer d'autres.

Les fichiers de ce dépôt ne contiennent aucune donnée réelle. L'exemple est entièrement fictif.

## Widgets utilisés

- [grist-questionnaire](https://github.com/lab17bis/grist-questionnaire) : questionnaires au DSFR avec logique conditionnelle et notes sur une échelle.
- [grist-catalogue](https://github.com/lab17bis/grist-catalogue) : catalogue de fiches au DSFR, avec recherche et filtres.
- [grist-graphique](https://github.com/lab17bis/grist-graphique) : tableaux de bord et indicateurs à seuils au DSFR.

## Autres espaces

- [espace-pilotage](https://github.com/lab17bis/espace-pilotage) : regarder et décider : un écran d'équipe qui rassemble indicateurs, réunions, projets et management visuel.
- [espace-collaboratif](https://github.com/lab17bis/espace-collaboratif) : faire ensemble : réunions, projets partagés et ressources communes d'une équipe.
- [espace-sondage](https://github.com/lab17bis/espace-sondage) : concevoir un questionnaire, savoir qui a répondu et lire les résultats en indicateurs.
- [espace-reseau](https://github.com/lab17bis/espace-reseau) : animer un réseau ou une communauté de pratique : membres, groupes, rencontres, présences, ressources partagées, retours, carte et liens entre acteurs.
- [espace-contributions](https://github.com/lab17bis/espace-contributions) : faire participer : boîte à idées, valorisation des réalisations des équipes, votes et suites données.

## Écosystème

- **[Grist](https://grist.numerique.gouv.fr)** : tableur-base de données libre ([gristlabs/grist-core](https://github.com/gristlabs/grist-core)), proposé aux agents publics par la [DINUM](https://www.numerique.gouv.fr/) dans [La Suite numérique](https://lasuite.numerique.gouv.fr/). L'espace s'importe dans toute instance de Grist.
- **[Système de design de l'État (DSFR)](https://www.systeme-de-design.gouv.fr/)** ([GouvernementFR/dsfr](https://github.com/GouvernementFR/dsfr)). Son usage est réservé aux sites des services de l'État.

## Mots-clés

Grist, espace Grist, modèle Grist, document clé en main, offre de service, suivi des sollicitations, suivi des demandes, accompagnement, relation usager, fiche contact, annuaire, satisfaction, enquête de satisfaction, tableau de bord, DSFR, Système de design de l'État, La Suite numérique, service public, logiciel libre.

## Licence

Fichiers de l'espace et documentation sous licence Creative Commons [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) : réutilisation et adaptation autorisées, en citant la source et en partageant sous la même licence. Le code des widgets est sous licence MIT, dans leurs dépôts.

Conçu par le Lab 17 bis, laboratoire d'innovation publique de l'académie de Reims. Contact : <lab17bis@ac-reims.fr>
