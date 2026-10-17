# Bilal Ezzaim — Full-Stack Developer Portfolio

Personal portfolio website for **Bilal Ezzaim**, a full-stack developer working with .NET, Java/Spring Boot, React, and modern web technologies. The portfolio presents professional experience, selected projects, technical skills, education, and contact information.

## Features

- Responsive portfolio with light and dark themes.
- Multilingual interface in French, English, Arabic, and Spanish.
- Right-to-left layout support for Arabic.
- Hero section with a continuously moving technology slider.
- Professional experience presented through project cards, ordered responsibilities, and technology badges.
- Searchable skill categories covering Java, JavaScript, C#, databases, APIs, architecture, security, DevOps, tools, version control, and methodologies.
- Dedicated sections for professional sectors, projects, education, services, and contact.

## Technology Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, CSS, Radix UI
- **Animation:** Framer Motion
- **Internationalization:** i18next, react-i18next
- **Icons:** Lucide React
- **Deployment:** GitHub Pages with `gh-pages`

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run locally

```bash
git clone https://github.com/Bilal-EZ-ZAIM/bilal-ezzaim.git
cd bilal-ezzaim
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages. |

## Project Structure

```text
src/
├── components/
│   ├── sections/       # Hero, About, Experience, Skills, Projects, and other page sections
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Shared utilities
├── locales/            # French, English, Arabic, and Spanish translations
└── i18n/               # Internationalization configuration
public/
└── image/              # Public images and portfolio assets
```

## Deployment

The Vite base path is configured for the GitHub Pages project site at `/bilal-ezzaim/`. To deploy, ensure GitHub Pages is enabled for the repository, then run:

```bash
npm run deploy
```

The `predeploy` script builds the site before `gh-pages` publishes the generated `dist/` directory.

## Author

**Bilal Ezzaim** — Full-Stack Developer

## License

All rights reserved © 2025 Bilal Ezzaim. No part of this project may be copied, used, or modified without explicit written permission.
