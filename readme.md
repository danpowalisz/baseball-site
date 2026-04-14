# Baseball Info - Modern React SPA

A responsive baseball information website built with React and Vite. Features client-side routing for smooth page transitions without full reloads, a consistent navigation system with active highlighting, and mobile-friendly design.

---

## Features

- **Client-side routing** - Navigate between pages instantly without reloading
- **Smooth scrolling** - Auto-scrolls to top when changing routes
- **Responsive design** - Works on desktop and mobile devices
- **Active state highlighting** - Navigation bar shows current page
- **Two-column card layouts** - Images at ~50% width with content on right

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens http://localhost:5173 in your browser with hot-reload enabled.

### Production Build

```bash
npm run build
```

Creates an optimized bundle in the `dist/` folder ready for hosting.

---

## Routes

| URL          | Page Name       | Description                          |
|--------------|-----------------|--------------------------------------|
| `/`          | Home            | Topics grid + About section         |
| `/current`   | Current Events  | Latest baseball news                |
| `/past`      | Historical Moments | Baseball history articles        |
| `/hof`       | Hall of Fame    | Inductee profiles                   |
| `/minors`    | Minor League    | Farm system updates                 |
| `/about`     | About           | Site information                    |
| `/contact`   | Contact Form    | Contact form page                   |

---

## Color Scheme

- **Primary background:** `#a5b4d1` (Light slate blue)
- **Navbar/Footer:** `#1A252F` (Dark navy)
- **Accent color:** `#3498db` (Blue for links/highlights)
- **Text:** `#333` (Dark gray), Headings: `#2c3e50` (Slate blue-gray)

---

## File Structure

```
baseball-site/
├── public/
│   └── images/              # Static image assets
│       ├── current_news.png
│       ├── past.png
│       ├── hall_of_fame.png
│       ├── minor_league.png
│       └── profile.png
├── src/
│   ├── main.jsx             # React entry point with router
│   ├── App.jsx              # Route definitions
│   ├── components/          # Shared UI components
│   │   ├── Navbar.jsx       # Navigation bar with active highlighting
│   │   ├── Footer.jsx       # Site footer
│   │   └── Layout.jsx       # Wrapper with scroll-to-top behavior
│   ├── pages/               # Route page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Current.jsx     # Current events
│   │   ├── Past.jsx        # Historical moments
│   │   ├── HallOfFame.jsx  # Hall of Fame
│   │   └── Minors.jsx      # Minor league
│   └── data/                # Static content files
│       ├── currentArticles.js
│       ├── pastArticles.js
│       ├── hofInductees.js
│       └── minorsArticles.js
├── vite.config.js           # Vite build configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## Code Examples

### Layout Component (scroll-to-top)

The `Layout` component wraps every route, providing a consistent navbar/footer and automatic scroll-to-top behavior:

```jsx
// src/components/Layout.jsx
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);

  return (
    <>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
```

### Navigation with Active Highlighting

The `Navbar` uses React Router's NavLink to show which page is active:

```jsx
// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo"><NavLink to="/">Baseball Info</NavLink></h1>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >Home</NavLink>
          </li>
          {/* ... more links */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

### Topic Page with Two-Column Layout

Topic pages (Current, Past, Hall of Fame, Minors) use a two-column layout:

```jsx
// src/pages/Current.jsx
import articles from '../data/currentArticles';

const Current = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Current Events</h1>
        <p>Latest news and updates from the baseball world</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <h2>The Latest in Baseball</h2>
        <div className="topic-page-grid">
          {articles.map((article, index) => (
            <article key={index} className="topic-page-card">
              {/* Image takes ~50% width */}
              <img src="../images/current_news.png" alt={article.title} />
              <div className="topic-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  </>
);

export default Current;
```

---

## Image Requirements

The site uses these placeholder images from https://picsum.photos/:

| Image                 | Size     | Purpose                  |
|-----------------------|----------|---------------------------|
| current_news.png      | 400×300  | Current events topic      |
| past.png              | 400×300  | Historical moments topic  |
| hall_of_fame.png      | 400×300  | Hall of Fame topic        |
| minor_league.png      | 400×300  | Minor league topic        |
| profile.png           | 800×800  | About page profile photo  |

Download example:
```bash
curl -o public/images/profile.png https://picsum.photos/seed/player/800/800
```

---

## Production Deployment

After building:

```bash
npm run build
```

The optimized files in `dist/` can be served by any static hosting:

- **GitHub Pages**: Upload `dist/` to GitHub, enable Pages
- **Netlify**: Connect repo, deploy automatically
- **Vercel**: Import project from repository
- **AWS S3**: Upload artifacts and configure CloudFront

---

## License

Free to use and modify. No restrictions.
