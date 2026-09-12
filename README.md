# Carnet de poche

Petit site statique (HTML + CSS + un peu de JavaScript) publié avec GitHub Pages.
Objectif : pouvoir tout écrire, modifier et publier depuis un téléphone.

## Contenu

| Chemin | Rôle |
| --- | --- |
| `index.html` | Page d'accueil |
| `galerie.html` | Galerie d'images |
| `journal.html` | Carnet de bord |
| `a-propos.html` | Comment le site est fait |
| `assets/css/style.css` | Toute la mise en forme |
| `assets/js/nav.js` | Menu repliable + lien actif |
| `assets/img/` | Illustrations SVG et logo |
| `.github/workflows/pages.yml` | Publication automatique |

## Activer Pages (une seule fois, à la main)

Le jeton des workflows n'a pas le droit de créer le site Pages, il faut donc
l'activer soi-même — ça se fait très bien depuis un téléphone :

1. **Settings › Pages › Build and deployment › Source** : choisir **GitHub Actions**.
2. Onglet **Actions › Deploy to GitHub Pages › Run workflow** (ou pousser un commit).

Ensuite, chaque push sur la branche par défaut republie le site automatiquement.

## Prévisualiser avant de publier

Le workflow publie aussi les branches de travail, dans un sous-dossier :

- push sur la branche par défaut → le site live, à la racine ;
- push sur n'importe quelle autre branche → une preview sur
  `.../preview/<nom-de-la-branche>/`, la racine restant celle de la branche par défaut.

Le nom de branche est mis en minuscules et tout ce qui n'est pas une lettre ou un
chiffre devient un tiret : `essai/photos` donne `.../preview/essai-photos/`.
L'URL exacte est rappelée dans le résumé du run, onglet **Actions**.

Depuis l'app GitHub : éditer un fichier, choisir **Create a new branch** au moment
de valider, ouvrir la preview, puis fusionner la branche quand le résultat convient.

Une seule preview est en ligne à la fois : c'est le dernier push qui gagne, et un
déploiement de la branche par défaut les efface toutes. En revanche une preview ne
peut jamais abîmer le site live, dont la racine est toujours reconstruite depuis la
branche par défaut.

Le site est alors visible sur `https://rafali.github.io/public-web-test/`.

Le workflow ne déploie que la branche par défaut ; les autres branches sont ignorées.
On peut aussi lancer un déploiement à la main depuis l'onglet **Actions**
(*Deploy to GitHub Pages* › *Run workflow*).

## Modifier depuis un téléphone

Chaque page est un fichier HTML autonome : ouvrir le fichier sur github.com (ou dans
l'application GitHub), toucher le crayon, éditer, valider. Le déploiement part tout seul.

Pour ajouter une page : dupliquer un fichier existant, puis ajouter le lien dans le bloc
`<nav>` des autres pages.

## Aperçu en local

```sh
python3 -m http.server 8000
```

puis ouvrir <http://localhost:8000>.
