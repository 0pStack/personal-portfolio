# Personal Portfolio

A personal portfolio and CV website built with plain HTML, CSS, and JavaScript. Showcases an "About Me" section, project highlights, a contact form, and a dedicated CV page.

## Features

- **Responsive landing page** with hero, about, projects, and contact sections
- **Mobile navigation** with an accessible toggle menu (keyboard, click-outside, scroll, and Escape handling)
- **Contact form** with client-side validation, ARIA error messaging, and a GDPR consent checkbox
- **Dedicated CV page** at `cv/cv.html` with its own styling
- **Accessibility-conscious markup** using ARIA attributes, semantic landmarks, and screen-reader-only helpers
- **Font Awesome icons** via CDN and Feather Icons on the CV page

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or build step)
- [Font Awesome](https://fontawesome.com/) (CDN) for icons on the landing page
- [Feather Icons](https://feathericons.com/) (CDN) for icons on the CV page

## Project Structure

```
.
├── index.html      # Landing page (home, about, projects, contact)
├── styles.css      # Landing page styles
├── script.js       # Mobile menu + contact form validation
├── cv/
│   ├── cv.html     # Standalone CV page
│   └── cv.css      # CV page styles
└── img/            # Images used across the site
```

## Getting Started

No build step or dependencies are required.

### View Locally

Clone the repo and open `index.html` directly in your browser:

```bash
git clone https://github.com/0pFlow/personal-portfolio.git
cd personal-portfolio
```

Then double-click `index.html`, or serve the folder with any static server, for example:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Open `http://localhost:8000` (or the port your server reports) in your browser.

### View on GitHub Pages

If GitHub Pages is enabled for this repository, the site is served from the root and is reachable at:

`https://0pFlow.github.io/personal-portfolio/`

## Screenshots

> Add screenshots here once available.

- Landing page — _screenshot placeholder_
- Projects section — _screenshot placeholder_
- Contact form — _screenshot placeholder_
- CV page — _screenshot placeholder_

## Author

**Ruslan Galiyev** — [@0pFlow](https://github.com/0pFlow)
