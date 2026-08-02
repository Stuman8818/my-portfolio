# Dave Stewart Portfolio

A portfolio for Dave Stewart, a full-stack software engineer with a front-end focus. The site presents selected work across healthcare, manufacturing, productivity, and independent product development through concise project cards and detailed case studies.

## Technology

- Next.js 15 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- CSS-based responsive layouts and subtle motion
- Next.js Image and Link components

## Featured work

The portfolio currently highlights four projects:

- Collette Health Virtual Nursing Application
- Manufacturing Applications at Rain Engineering
- Daily Quest
- Yard To Table

Professional projects are presented at an approved public-facing level. Screenshots, proprietary data, and internal workflow details are omitted where confidentiality agreements apply.

## Project structure

```text
src/
├── app/                  # App Router pages, metadata, sitemap, and robots
├── components/
│   ├── layout/           # Shared navigation and footer
│   ├── projects/         # Project cards and case-study presentation
│   └── sections/         # Homepage sections
├── data/                 # Centralized project, skill, and link content
├── styles/               # Global theme and responsive styling
└── types/                # Shared TypeScript models

public/                   # Screenshots, résumé PDF, and other static assets
```

Project content is maintained in `src/data/projects.ts`. Skills, professional links, and the résumé path are maintained in `src/data/skills.ts`.

## Routes

- `/` — portfolio homepage
- `/projects` — project overview
- `/projects/[slug]` — statically generated project case studies
- `/about` — professional background
- `/contact` — résumé and professional links

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npx tsc --noEmit
npm run lint
npm run build
```

The project does not currently define an automated test script.

Do not run `npm run build` while the development server is writing to the same `.next` directory. Stop the development server first, or perform the production build in an isolated workspace.

## Content guidelines

- Keep project content centralized in the data files.
- Preserve approved screenshots and valid external links.
- Do not publish confidential screenshots, customer data, or proprietary implementation details.
- Describe roadmap functionality as planned until it is implemented.
- Keep the experience responsive and accessible from mobile through large desktop screens.

## Deployment

The site is designed for deployment on Vercel or another platform that supports Next.js App Router applications. Run a successful production build before deployment.
