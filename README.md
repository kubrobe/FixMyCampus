# FixMyCampus

A web platform for reporting, tracking and resolving campus issues, initially built for **Ajou University in Tashkent (AUT)**.

Students and staff will be able to report problems (broken equipment, facility issues, safety concerns), and the university will be able to route, track and resolve them.

> **Status:** early development. Only the frontend foundation exists. Authentication, the database, issue reporting and AI classification are **not implemented yet**.

## Repository layout

```
FixMyCampus/
├── frontend/          React + Vite + Tailwind CSS web app
│   ├── public/        Static files served as-is (favicon)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/   App shell, sidebar, navigation config
│   │   │   └── ui/       Reusable UI primitives (Card, Badge, Icon, Logo)
│   │   ├── pages/        Page-level components
│   │   ├── lib/          Small helpers and app config
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     Tailwind import + design tokens
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

The frontend lives in `frontend/` so a future backend service (e.g. the Python/FastAPI classifier) can sit alongside it in its own folder.

## Tech stack

| Area | Choice | Status |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | In use |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) | In use |
| Linting | oxlint | In use |
| Backend, auth, storage | Supabase | Planned |
| Analytics charts | Recharts | Planned |
| AI classification | Python + FastAPI + scikit-learn | Planned |

## Getting started

### Prerequisites

- **Node.js 20.19+ or 22.12+** (required by Vite 8)
- npm (comes with Node.js)

### Setup

```bash
git clone https://github.com/kubrobe/FixMyCampus.git
cd FixMyCampus/frontend
npm install
cp .env.example .env    # optional for now; no variable is required yet
npm run dev
```

Open http://localhost:5173.

### Scripts (run inside `frontend/`)

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Create a production build in `frontend/dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the source with oxlint |

## Environment variables

Copy `frontend/.env.example` to `frontend/.env` and fill in values locally. Only variables prefixed with `VITE_` are exposed to the browser, so **never put server-side secrets in the frontend env**. `.env` files are ignored by Git; only `.env.example` (placeholders) is committed.

## Design system

Dark-first, defined as Tailwind theme tokens in `frontend/src/index.css`:

- **Navy** (`navy-50` … `navy-950`): backgrounds and surfaces
- **Jade** (`jade-50` … `jade-900`): primary accent
- **Fonts:** Plus Jakarta Sans (headings, `font-display`) and Inter (body), loaded from Google Fonts
- Motion is subtle and respects `prefers-reduced-motion`.
