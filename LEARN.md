# LEARN

## Overview
- Portfolio site lives in `portfolio/`: React + Vite + Tailwind, sections wired in `src/App.jsx` with components like `Hero`, `About`, `TechStack`, `Projects`, and `Contact`.
- Contact form uses EmailJS; it will not send without valid `VITE_EMAILJS_*` keys in `.env`.
- Repo also contains a C/ncurses snake game (`src/main.c`) built via CMake; `build/` holds generated artifacts.

## Prerequisites
- Node.js 18+ and npm (Vite 5 requires current LTS or newer).
- EmailJS account with service, template, and public key for contact form delivery.
- (Optional) C toolchain: CMake 3.16+, `ncurses` dev headers (e.g., `brew install ncurses` on macOS) to rebuild the snake game.

## Quickstart (portfolio site)
```bash
cd portfolio/portfolio
npm install
npm run dev
```
The dev server prints a local URL (default `http://localhost:5173`) and auto-reloads on changes.

## Environment (EmailJS)
```bash
cd portfolio/portfolio
cp .env.example .env
```
Fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` with values from your EmailJS dashboard. Restart the dev server after editing `.env`.

## Project Layout (portfolio/)
- `src/App.jsx`: mounts the page sections and scroll reveal observer.
- `src/components/Contact.jsx`: EmailJS form handling and validation; requires the env keys above.
- `src/components/*`: hero/about/stack/projects/footer + scroll-to-top.
- `index.css` + `tailwind.config.js`: global styles and design tokens.
- `public/`: static assets (favicons, CV).

## NPM Scripts
```bash
npm run dev      # start Vite dev server
npm run build    # production build to dist/
npm run preview  # serve the built app locally
```

## Deployment Notes
- Vercel/Netlify both work: build command `npm run build`, output dir `dist`.
- Ensure EmailJS env vars are set in the platform dashboard; otherwise the contact form will show a configuration error.

## Troubleshooting
- **Contact form shows configuration error**: check `.env` keys and that they are exposed as VITE_ variables; restart dev server.
- **Emails not received**: verify EmailJS template placeholders match the fields in `Contact.jsx` (name/email/message) and that the service template is active.
- **Tailwind classes missing in build**: ensure JSX uses className strings (not dynamic names) so JIT can tree-shake correctly.

## Snake Game (C/ncurses)
The C target is separate from the Vite app.
```bash
cmake -S . -B build
cmake --build build
./build/snake
```
Controls: arrows or WASD to move, `q` to quit. If linking fails, install `ncurses` dev headers and clear/recreate `build/`.

