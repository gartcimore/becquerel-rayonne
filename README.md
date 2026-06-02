# Becquerel Rayonne

Site web de l'association Becquerel Rayonne.

## Structure

```
becquerel-rayonne/
├── content.json          ← contenu du site (source unique)
├── build.js              ← génère les index.html à partir des templates
├── eflyer.png            ← affiche du prochain événement
├── modern/
│   ├── template.html     ← template avec {{placeholders}}
│   ├── style.css
│   └── index.html        ← généré (ne pas éditer directement)
└── minimal/
    ├── template.html
    ├── style.css
    └── index.html        ← généré (ne pas éditer directement)
```

## Modifier le contenu

Éditer `content.json` pour mettre à jour les textes (description, événement, contact, etc.).

## Générer le site

```bash
node build.js
```

Cela régénère `modern/index.html` et `minimal/index.html` à partir des templates et du contenu défini dans `content.json`.

## Pré-requis

- Node.js (pas de dépendances externes)

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`.

URL : https://gartcimore.github.io/becquerel-rayonne/
