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

## Activer la publication (une seule fois)

1. **Settings › Pages › Build and deployment › Source** : choisir **GitHub Actions**.
2. Pousser sur la branche par défaut du dépôt : le workflow publie le site.

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
