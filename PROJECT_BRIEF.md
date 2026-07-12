# HIMAO Group — Brief projet site web

## Contexte

HIMAO Group est un cabinet de conseil multidisciplinaire fictif créé dans le cadre d'un
projet de simulation d'agence (6 semaines) à PIGIER Bénin, filière Réseau Génie Logiciel.
L'agence est basée à Cotonou, Bénin, et intervient dans trois domaines : commerce et
développement d'affaires, gestion de projets, infrastructures informatiques.

Ce document sert de brief complet pour reprendre/continuer le développement du site
vitrine de l'agence.

- **Slogan** : « Notre expertise au service de votre croissance »
- **Email** : himaogroup@gmail.com
- **Site cible** : https://himaogroup.netlify.app
- **Localisation** : Cotonou, Bénin

---

## Stack technique

- **HTML statique** (une page = un fichier `.html`, pas de framework JS)
- **Tailwind CSS** compilé via la CLI officielle (pas de CDN — CSS final optimisé et purgé)
- **DaisyUI** (plugin Tailwind) — composants prêts à l'emploi avec un thème custom `himaotheme`
- **Netlify** — hébergement + Netlify Forms pour le formulaire de contact (pas de backend)
- **npm** requis uniquement pour compiler le CSS (`tailwindcss` + `daisyui` en devDependencies)

## Identité visuelle

| Nom            | Hex       | Usage                          |
|----------------|-----------|---------------------------------|
| `himao-navy`   | `#1F3A5F` | Couleur principale (nav, titres, boutons) |
| `himao-gold`   | `#C9A24B` | Accents, liens actifs, éléments de mise en valeur |
| `himao-dark`   | `#0F1E33` | Footer, textes forts, fonds sombres |
| `himao-light`  | `#F5F1E8` | Fonds de sections claires alternées |

Police : `Inter` (ou système par défaut en fallback).
Le thème DaisyUI custom `himaotheme` est défini dans `tailwind.config.js` et mappe ces
couleurs sur les tokens DaisyUI (`primary`, `secondary`, `accent`, `neutral`, `base-100/200/300`).

---

## Structure du projet

```
himao-group/
├── index.html          # Accueil : hero, à propos, domaines, aperçu services, valeurs
├── a-propos.html        # À propos détaillé + valeurs
├── services.html         # Domaines d'activité + liste complète des services
├── equipe.html            # Organigramme (5 membres, cards avec avatar)
├── contact.html            # Formulaire Netlify + honeypot anti-spam
├── 404.html
├── assets/
│   ├── images/
│   │   ├── favicon.ico
│   │   ├── logo-himao.png       # à ajouter
│   │   └── team/                # photos des 5 membres (voir noms de fichiers ci-dessous)
│   └── icons/
├── css/
│   ├── input.css         # source Tailwind (directives @tailwind, éditable)
│   └── output.css        # généré par `npm run build`, ne pas éditer à la main
├── js/
│   └── main.js            # menu mobile (DaisyUI dropdown natif), nav active, soumission form
├── tailwind.config.js      # couleurs HIMAO + thème DaisyUI custom
├── package.json
├── netlify.toml
└── README.md
```

### Scripts npm

```bash
npm install
npm run dev     # tailwindcss --watch, régénère css/output.css à chaque sauvegarde
npm run build   # build minifié pour la prod
```

---

## Contenu structuré (source de vérité)

### Présentation

> HIMAO Group est un cabinet de conseil multidisciplinaire créé en juillet 2026 à Cotonou,
> Bénin. Il accompagne les entreprises, les entrepreneurs et les organisations dans leur
> développement en proposant des solutions innovantes dans les domaines de la gestion de
> projets, des technologies de l'information et du commerce international.
>
> Grâce à une approche collaborative et orientée vers les résultats, HIMAO Group met son
> expertise au service de ses clients afin de renforcer leur performance, leur
> compétitivité et leur capacité d'innovation.

### Domaines d'activité (3)

1. **Commerce et Développement d'affaires** — accompagnement de la croissance commerciale, locale et internationale
2. **Gestion de projets** — méthodologies éprouvées, du démarrage à la livraison
3. **Infrastructures Informatiques** — conception, sécurisation, administration de systèmes d'information

### Services (6)

| Service | Description courte |
|---|---|
| Gestion, suivi et évaluation de projet | Pilotage complet du cadrage à l'évaluation des résultats |
| Conception, administration et sécurisation des réseaux | Infrastructures réseau sécurisées et adaptées |
| Conseil en transformation numérique | Accompagnement stratégique de la digitalisation |
| Accompagnement commercial national et international | Appui au développement commercial |
| Étude de marché et stratégie commerciale | Analyse de marché pour orienter les décisions |
| Gestion des réseaux sociaux | Création de contenu et animation digitale |

### Valeurs (5)

Excellence · Professionnalisme · Esprit d'équipe · Intégrité · Performance

### Équipe (5 membres — organigramme)

| Nom | Rôle | Filière | Contact | Fichier image attendu |
|---|---|---|---|---|
| OSSENI Hamdiyath | Directrice de l'agence | Commerce International et E-business | 0157580006 | `assets/images/team/osseni-hamdiyath.jpg` |
| ADANHOUME Ange | Responsable Administratif et Financier | Entrepreneuriat et Gestion de Projet | 0157265668 | `assets/images/team/adanhoume-ange.jpg` |
| BANKOLE Murielle | Responsable Communication et identité visuelle | Réseaux Informatique, Mobilité et Sécurité | 0168783160 | `assets/images/team/bankole-murielle.jpg` |
| ATCHADE Paule-Inès | Responsable adjointe communication et identité visuelle | Réseaux Informatique, Mobilité et Sécurité | 0143743628 | `assets/images/team/atchade-paule-ines.jpg` |
| KOUNDE Ange-Onel | Responsable Technique | Réseaux et Génie Logiciel | 0159061991 | `assets/images/team/kounde-ange-onel.jpg` |

Hiérarchie : Directrice → Responsable Administratif et Financier → (Responsable Communication + Responsable Technique) → Responsable adjointe communication.

---

## Composants DaisyUI utilisés

- `navbar` — avec `dropdown` natif pour le menu mobile (pas de JS custom pour le toggle, seulement pour le highlight du lien actif)
- `card` + `card-body` + `card-title` — domaines, services, cards équipe
- `avatar` + `placeholder` — photos d'équipe avec fallback si image manquante (`onerror`)
- `form-control`, `input`, `textarea`, `label` — formulaire de contact
- `btn` (variantes `btn-outline`, `btn-sm`, couleurs custom via classes Tailwind directes)

## Formulaire de contact (page `contact.html`)

- Branché sur **Netlify Forms** (`data-netlify="true"`, champ caché `form-name`)
- **Honeypot anti-spam** : champ caché `bot-field` (`data-netlify-honeypot="bot-field"`) — invisible pour un humain, piège pour les bots
- Soumission gérée en JS (`js/main.js`) via `fetch` vers `/` pour éviter le rechargement de page, affichage d'un message de succès inline après envoi
- Champs : nom complet, email, message — tous `required`

## Sécurité / bonnes pratiques déjà en place

- Pas de `mailto:` (peu fiable, pas de garantie de livraison) → formulaire Netlify Forms
- Honeypot pour limiter le spam de bots (suffisant pour un site vitrine, pas besoin de reCAPTCHA)
- Aucune donnée sensible en dur dans le code (pas de clé API, pas de credentials)
- `netlify.toml` gère la redirection 404 custom

---

## Ce qui reste à faire

1. **Assets réels** : remplacer les placeholders vides dans `assets/images/team/` par les vraies photos des 5 membres (noms de fichiers déjà prévus dans le HTML, voir tableau équipe ci-dessus), ajouter un vrai `favicon.ico` et un `logo-himao.png`
2. **Déploiement Netlify** : connecter le repo GitHub à Netlify, vérifier que le build command (`npm run build`) et le publish directory (`.`) sont bien configurés (déjà dans `netlify.toml`)
3. **Vérifier l'onglet Forms** sur le dashboard Netlify après le premier déploiement pour confirmer que les soumissions du formulaire de contact arrivent bien
4. **Optionnel — améliorations possibles** :
   - Ajouter des animations au scroll (fade-in au scroll pour les sections)
   - Ajouter une section "réalisations / études de cas" fictives sur `services.html` ou une nouvelle page
   - Optimiser les images (format WebP, tailles responsives)
   - Ajouter des meta tags Open Graph pour le partage sur les réseaux sociaux
   - Vérifier l'accessibilité (contrastes, `alt` sur toutes les images, navigation clavier)

---

## Notes de contexte projet (PIGIER)

Ce site s'inscrit dans une simulation d'agence de 6 semaines. L'utilisateur (KOUNDE Ange-Onel)
est le Responsable Technique / DSI de l'agence fictive et développe ce site comme livrable
technique du projet. D'autres livrables existent déjà en parallèle (fiche de constitution de
l'agence, rapports d'activité hebdomadaires, charte graphique, logo) — le site doit rester
cohérent avec cette identité de marque déjà établie (couleurs navy/gold, ton professionnel).
