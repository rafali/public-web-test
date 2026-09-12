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
| `.github/workflows/pages.yml` | Publication, déclenchée à la main |

## Publier : uniquement à la demande

Un push ne publie rien. Le workflow ne se déclenche qu'à la main, depuis
**Actions › Deploy to GitHub Pages › Run workflow**, où le menu déroulant permet
de choisir la branche à publier. Commiter et publier sont donc deux gestes séparés.

Ce que fait le run selon la branche choisie :

- **branche par défaut** → met à jour le site live, à la racine ;
- **toute autre branche** → publie une preview sur `.../preview/<nom-de-la-branche>/`,
  la racine restant celle de la branche par défaut.

Le nom de branche est mis en minuscules et tout ce qui n'est pas une lettre ou un
chiffre devient un tiret : `essai/photos` donne `.../preview/essai-photos/`.
L'URL exacte est rappelée dans le résumé du run.

Une seule preview est en ligne à la fois : c'est le dernier run qui gagne, et
publier la branche par défaut les efface toutes. Une preview ne peut pas abîmer le
site live, dont la racine est toujours reconstruite depuis la branche par défaut.

Le site est visible sur `https://rafali.github.io/public-web-test/`.

### Activation de Pages (déjà faite)

Pour mémoire, si le dépôt devait être recréé : **Settings › Pages › Build and
deployment › Source** → **GitHub Actions**. Le jeton des workflows n'a pas le droit
de le faire lui-même.

## Modifier depuis un téléphone

Chaque page est un fichier HTML autonome : ouvrir le fichier sur github.com (ou dans
l'application GitHub), toucher le crayon, éditer, valider. Rien n'est publié tant que
le workflow n'a pas été lancé à la main.

Pour ajouter une page : dupliquer un fichier existant, puis ajouter le lien dans le bloc
`<nav>` des autres pages.

## Aperçu en local

```sh
python3 -m http.server 8000
```

puis ouvrir <http://localhost:8000>.
