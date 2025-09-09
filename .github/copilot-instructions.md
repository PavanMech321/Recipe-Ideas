# Copilot Instructions for recipe-ideas

## Project Overview
- **Framework:** React (JSX) with Vite for fast development and HMR.
- **Styling:** Tailwind CSS (see `src/index.css`, `tailwind.config.js`).
- **Linting:** ESLint with custom config (`eslint.config.js`), including React Hooks and Vite refresh plugins.
- **Build Tool:** Vite (`vite.config.js`).

## Key Files & Structure
- `src/App.jsx`: Main app logic, fetches recipes from [themealdb.com](https://www.themealdb.com/api.php) by ingredient.
- `src/components/RecipeCard.jsx`: Displays individual recipe cards.
- `src/main.jsx`: React entry point, renders `<App />`.
- `src/index.css`: Tailwind CSS entry, some custom base styles.
- `public/`: Static assets (e.g., `vite.svg`).

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite, HMR enabled)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses custom ESLint config)

## Patterns & Conventions
- **Component Structure:** All UI logic in React function components. Main data flow: `App.jsx` fetches recipes, passes each to `RecipeCard`.
- **API Integration:** All recipe data fetched from themealdb.com via ingredient search. No local backend.
- **Styling:** Use Tailwind utility classes in JSX. Custom CSS discouraged except in `index.css`.
- **Error Handling:** User-facing errors shown in `<App />` via state (`error`).
- **Routing:** No client-side routing; single-page app.
- **External Links:** Recipe details link out to themealdb.com.

## Linting & Formatting
- ESLint config ignores `dist/`.
- React Hooks and Vite refresh rules enforced.
- Unused vars allowed if they match `^[A-Z_]` (see ESLint config).
- Tailwind-specific at-rules whitelisted in lint config.

## Integration Points
- **ThemealDB API:** All recipe data comes from this public API.
- **Tailwind/PostCSS:** See `postcss.config.js` for build pipeline.

## Example: Adding a New Component
- Place in `src/components/`.
- Use Tailwind classes for styling.
- Import and use in `App.jsx` or other parent component.

## References
- See `README.md` for Vite/React basics.
- See `eslint.config.js` for lint rules.
- See `tailwind.config.js` and `postcss.config.js` for styling pipeline.

---
**Feedback:** If any conventions or workflows are unclear, please specify which section needs more detail or examples.
