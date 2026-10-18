# Notebook portfolio redesign

This React and Vite portfolio uses ruled paper, pixel lettering, handwritten notes,
taped imagery, and overlapping project folders. Work is isolated on
`codex/notebook-redesign` for review before merging to the production branch.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build` to generate `dist/`.
The existing Vercel Vite configuration can continue to be used.

## Editing content

- `src/utils/constans.js`: personal information, social links, and résumé path.
- `src/data/projects.js`: project descriptions, technologies, features, and notes.
- `src/App.jsx`: layout, mobile navigation, project dialogs, and contact actions.
- `src/index.css`: visual styles, responsive layouts, and reduced-motion support.

Featured projects: **Yalla Shaly, Al Qemma, Rabbat, and Drop Coffee**.
Project details open in native dialogs with keyboard dismissal and focus restoration.
Contact actions use the existing email, phone, and social details. The résumé is
retained. No contact form or backend is required.

## Asset provenance

Optimized images in `public/projects/` are copied from the corresponding local projects:

- `chalet.webp`: Yalla Shaly's editorial chalet image.
- `qemma.webp`: Al Qemma's campaign image.
- `rabbat.webp`: the existing Rabbat desktop homepage screenshot retained in the Al Qemma checkout.
- `coffee.webp`: Drop Coffee's mango matcha campaign image.

The Yalla Shaly, Al Qemma, and Drop Coffee previews are illustrative interface
compositions using real project imagery. Rabbat uses an existing screenshot.
No public live demo URLs have been supplied; project actions open notes instead.
Add verified URLs to the project data when available.

The existing portrait and résumé are retained. Typography uses DM Sans, Caveat,
and VT323 from Google Fonts, with system fallbacks.
