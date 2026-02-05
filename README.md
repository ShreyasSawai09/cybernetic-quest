# Cybernetic Quest

Portfolio site for Shreyas Sawai — Cybersecurity Engineer & AI Security Specialist.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local development

```sh
npm i
npm run dev
```

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run test` — Run tests

## Deploy to GitHub Pages

1. Push this repo to your GitHub account (e.g. `yourusername/cybernetic-quest`).

2. In the repo: **Settings → Pages → Build and deployment**:
   - Source: **GitHub Actions**.

3. Push to `main` (or run the workflow from the Actions tab). The site will be at:
   - **https://yourusername.github.io/cybernetic-quest/**

If your repo name is different, set the same name in `vite.config.ts` (`base: '/your-repo-name/'`) and in the workflow env so paths match.
