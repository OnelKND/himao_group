# HIMAO Group — Site Web

Site vitrine officiel de **HIMAO Group**, cabinet de conseil multidisciplinaire basé à Cotonou, Bénin.

> « Notre expertise au service de votre croissance »

## Stack technique

- **HTML statique** (une page = un fichier `.html`)
- **Tailwind CSS** (via CLI, pas de CDN — CSS final optimisé)
- **DaisyUI** — composants prêts à l'emploi (navbar, card, avatar, form-control) avec un thème custom `himaotheme` aux couleurs de la marque
- **Netlify** — hébergement + formulaire de contact (Netlify Forms) avec protection anti-spam (honeypot)

## Démarrage

```bash
npm install
npm run dev
```

`npm run dev` lance Tailwind en mode watch : `css/output.css` se régénère à chaque sauvegarde.
Ouvre ensuite `index.html` dans le navigateur (ou utilise l'extension VS Code "Live Server" pour l'auto-reload).

Build de production (CSS minifié) :

```bash
npm run build
```

## Structure du projet

```
himao-group/
├── index.html
├── a-propos.html
├── services.html
├── equipe.html
├── contact.html
├── 404.html
├── assets/
│   ├── images/          # logo, favicon, photos équipe
│   └── icons/
├── css/
│   ├── input.css        # source Tailwind (à éditer)
│   └── output.css       # généré automatiquement, ne pas éditer
├── js/
│   └── main.js           # menu mobile, nav active, gestion du formulaire
├── tailwind.config.js     # couleurs HIMAO + thème DaisyUI custom
└── netlify.toml
```

## Couleurs de marque

| Nom          | Hex       | Usage                     |
|--------------|-----------|---------------------------|
| `himao-navy` | `#1F3A5F` | Couleur principale        |
| `himao-gold` | `#C9A24B` | Accents, liens actifs     |
| `himao-dark` | `#0F1E33` | Footer, textes forts      |
| `himao-light`| `#F5F1E8` | Fonds de sections claires |

## À faire avant mise en prod

- Remplacer les images placeholder dans `assets/images/team/` par les vraies photos de l'équipe
- Ajouter un vrai favicon et logo dans `assets/images/`
- Une fois déployé sur Netlify, le formulaire de contact apparaîtra automatiquement dans l'onglet **Forms** du dashboard Netlify

## Contact

- 📍 Cotonou, Bénin
- 📧 himaogroup@gmail.com
- 🌐 https://himaogroup.netlify.app
