# Becquerel Rayonne

Site web de l'association Becquerel Rayonne.

## Structure

```
becquerel-rayonne/
├── content.json      ← contenu du site (source unique)
├── template.html     ← template avec {{placeholders}}
├── build.js          ← génère index.html à partir du template
├── style.css         ← styles
├── eflyer.png        ← affiche du prochain événement
└── index.html        ← généré (ne pas éditer directement)
```

## Modifier le contenu

Éditer `content.json` pour mettre à jour les textes (description, événement, contact, etc.).

## Générer le site

```bash
node build.js
```

## Pré-requis

- Node.js (pas de dépendances externes)

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`.

URL : https://gartcimore.github.io/becquerel-rayonne/
