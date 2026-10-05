# Jesse Sergent Portfolio (React + Tailwind)

This project moves the original three-page personal site into the React/Vite/Tailwind setup shown in your screenshot.

## Start it

Run npm install, then npm run dev. For a production build, run npm run build. The Vite configuration keeps the /Jeser3535.github.io/ GitHub Pages base path from your setup. Routing uses URL hashes so direct visits and refreshes work on GitHub Pages without server-side route rewrites.

## Where things go

- src/App.jsx selects the page route.
- src/Navbar.jsx renders the shared responsive navigation.
- src/assets/pages/ contains Home, About, and Contact.
- src/index.css imports Tailwind 4 and defines the site colors.
- src/App.css contains reusable card, button, and entrance animation styles.
- public/Images/ and public/Documents/ hold static files served by Vite.

## Copy in your existing assets

The HTML files refer to assets that were not included with the uploaded source files. Copy them into these matching locations in public/:

- public/Images/Logo.png
- public/Images/Personal_portrait.png
- public/Images/tech_Logo.png
- public/Images/linkedin-logo.png
- public/Images/github-logo.webp
- public/Images/handshake-logo.jpg
- public/Images/Gmail-logo.webp
- public/Documents/Resume.pdf

The site still works without those files; image elements hide if their file is missing. The resume link expects the PDF above.
