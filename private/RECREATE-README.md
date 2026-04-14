# Baseball Info Site - Complete Recreation Guide

## Project Overview

A modern, responsive baseball information website built with React and Vite. The site features client-side routing for smooth page transitions without full reloads, a consistent navigation system, and mobile-friendly design.

---

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

---

## Step 1: Project Setup

### Create the project directory
```bash
mkdir baseball-site
cd baseball-site
```

### Initialize npm and install dependencies
```bash
npm init -y

# Install React and routing
npm install react react-dom react-router-dom

# Install Vite for build tooling
npm install --save-dev vite @vitejs/plugin-react
```

---

## Step 2: Create File Structure

```bash
mkdir -p public/images src/components src/pages src/data
```

Create the image placeholder files (or download actual images):
```bash
touch public/images/current_news.png
touch public/images/past.png
touch public/images/hall_of_fame.png
touch public/images/minor_league.png
touch public/images/profile.png
```

---

## Step 3: Create vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
```

---

## Step 4: Create package.json

```json
{
  "name": "baseball-info",
  "version": "1.0.0",
  "description": "Baseball information website",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0"
  }
}
```

---

## Step 5: Create src/main.jsx (Entry Point)

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

---

## Step 6: Create src/App.jsx (Router)

```jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Current from './pages/Current';
import Past from './pages/Past';
import HallOfFame from './pages/HallOfFame';
import Minors from './pages/Minors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="current" element={<Current />} />
        <Route path="past" element={<Past />} />
        <Route path="hof" element={<HallOfFame />} />
        <Route path="minors" element={<Minors />} />
      </Route>
    </Routes>
  );
}

export default App;
```

---

## Step 7: Create Shared Components

### src/components/Navbar.jsx

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <NavLink to="/">Baseball Info</NavLink>
        </h1>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/current"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Current
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/past"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Past
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hof"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Hall of Fame
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/minors"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Minor League
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? '#3498db' : '#ecf0f1'
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

### src/components/Footer.jsx

```jsx
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
```

### src/components/Layout.jsx

```jsx
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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

---

## Step 8: Create Data Files

### src/data/currentArticles.js

```javascript
export default [
  {
    title: "Spring Training Updates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "../images/current_news.png"
  },
  {
    title: "Rookie of the Month Award",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "../images/current_news.png"
  },
  {
    title: "Trade Rumors Heat Up",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "../images/current_news.png"
  }
];
```

### src/data/pastArticles.js

```javascript
export default [
  {
    title: "The Great Strikes of 1919",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "../images/past.png"
  },
  {
    title: "The 1969 Mets Miracle Season",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "../images/past.png"
  },
  {
    title: "The Integration Era",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "../images/past.png"
  }
];
```

### src/data/hofInductees.js

```javascript
export default [
  { name: "Babe Ruth", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Jackie Robinson", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { name: "Willie Mays", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." }
];
```

### src/data/minorsArticles.js

```javascript
export default [
  {
    title: "Rookie of the Year Watch List",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "../images/minor_league.png"
  },
  {
    title: "Promotion to Majors Imminent",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "../images/minor_league.png"
  },
  {
    title: "Farm System Rankings Update",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "../images/minor_league.png"
  }
];
```

---

## Step 9: Create Page Components

### src/pages/Home.jsx

```jsx
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Baseball Info</h1>
        <p>Your source for everything baseball</p>
      </div>
    </section>

    <section id="topics" className="topics-section">
      <div className="container">
        <h2>Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <img src="../images/current_news.png" alt="Current Events" />
            <h3><Link to="/current" style={{ color: 'inherit', textDecoration: 'none' }}>Current</Link></h3>
            <p>Latest news and updates from the baseball world</p>
          </div>

          <div className="topic-card">
            <img src="../images/past.png" alt="History" />
            <h3><Link to="/past" style={{ color: 'inherit', textDecoration: 'none' }}>Past</Link></h3>
            <p>Historical moments and legendary careers</p>
          </div>

          <div className="topic-card">
            <img src="../images/hall_of_fame.png" alt="Hall of Fame" />
            <h3><Link to="/hof" style={{ color: 'inherit', textDecoration: 'none' }}>Hall of Fame</Link></h3>
            <p>Celebrating the greatest players of all time</p>
          </div>

          <div className="topic-card">
            <img src="../images/minor_league.png" alt="Minor Leagues" />
            <h3><Link to="/minors" style={{ color: 'inherit', textDecoration: 'none' }}>Minor League</Link></h3>
            <p>The farm system and future stars</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="../images/profile.png" alt="Profile Photo" />
          <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements. Whether you're a lifelong fan or just getting into the game, we have something for everyone.</p>
        </div>
      </div>
    </section>
  </>
);

export default Home;
```

### src/pages/About.jsx

```jsx
import { Link } from 'react-router-dom';

const About = () => (
  <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>About Baseball Info</h1>
        <p>Passionate coverage of everything baseball</p>
      </div>
    </section>

    <section className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="../images/profile.png" alt="Profile Photo" />
          <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements. Whether you're a lifelong fan or just getting into the game, we have something for everyone.</p>
        </div>
      </div>
    </section>

    <section id="topics" className="topics-section">
      <div className="container">
        <h2>Explore More</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <img src="../images/current_news.png" alt="Current Events" />
            <h3><Link to="/current" style={{ color: 'inherit', textDecoration: 'none' }}>Current</Link></h3>
            <p>Latest news and updates from the baseball world</p>
          </div>

          <div className="topic-card">
            <img src="../images/past.png" alt="History" />
            <h3><Link to="/past" style={{ color: 'inherit', textDecoration: 'none' }}>Past</Link></h3>
            <p>Historical moments and legendary careers</p>
          </div>

          <div className="topic-card">
            <img src="../images/hall_of_fame.png" alt="Hall of Fame" />
            <h3><Link to="/hof" style={{ color: 'inherit', textDecoration: 'none' }}>Hall of Fame</Link></h3>
            <p>Celebrating the greatest players of all time</p>
          </div>

          <div className="topic-card">
            <img src="../images/minor_league.png" alt="Minor Leagues" />
            <h3><Link to="/minors" style={{ color: 'inherit', textDecoration: 'none' }}>Minor League</Link></h3>
            <p>The farm system and future stars</p>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  </>
);

export default About;
```

### src/pages/Contact.jsx

```jsx
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no backend connected)');
  };

  return (
    <>
      <section className="hero-section hero-page">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
```

### src/pages/Current.jsx

```jsx
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
        <div className="content-wrapper">
          <h2>The Latest in Baseball</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src="../images/current_news.png" alt={article.title} />
                <div className="topic-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
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

### src/pages/Past.jsx

```jsx
import articles from '../data/pastArticles';

const Past = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Historical Moments</h1>
        <p>Historical moments and legendary careers</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Baseball History</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src="../images/past.png" alt={article.title} />
                <div className="topic-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  </>
);

export default Past;
```

### src/pages/HallOfFame.jsx

```jsx
import inductees from '../data/hofInductees';

const HallOfFame = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Hall of Fame Legends</h1>
        <p>Celebrating the greatest players of all time</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Hall of Fame Inductees</h2>
          <div className="topic-page-grid">
            {inductees.map((inductee, index) => (
              <article key={index} className="topic-page-card">
                <img src="../images/hall_of_fame.png" alt={inductee.name} />
                <div className="topic-content">
                  <h3>{inductee.name}</h3>
                  <p>{inductee.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  </>
);

export default HallOfFame;
```

### src/pages/Minors.jsx

```jsx
import articles from '../data/minorsArticles';

const Minors = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Minor League Baseball</h1>
        <p>The farm system and future stars</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Farm System News</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src="../images/minor_league.png" alt={article.title} />
                <div className="topic-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  </>
);

export default Minors;
```

---

## Step 10: Create public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Baseball Info</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Step 11: Download Images

Get placeholder images from https://picsum.photos/:

```bash
# Current news (400x300)
curl -o public/images/current_news.png https://picsum.photos/seed/baseball/400/300

# History (400x300)
curl -o public/images/past.png https://picsum.photos/seed/history/400/300

# Hall of Fame (400x300)
curl -o public/images/hall_of_fame.png https://picsum.photos/seed/hof/400/300

# Minor League (400x300)
curl -o public/images/minor_league.png https://picsum.photos/seed/farm/400/300

# Profile photo (800x800)
curl -o public/images/profile.png https://picsum.photos/seed/player/800/800
```

---

## Step 12: Run the Development Server

```bash
npm run dev
```

The development server will start at http://localhost:5173 and open automatically in your browser.

---

## Production Build

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` folder. Serve this folder with any static file server or hosting provider.

---

## Routes Reference

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Topics grid + About section |
| `/current` | Current Events | Latest baseball news |
| `/past` | Historical Moments | Baseball history articles |
| `/hof` | Hall of Fame | Inductee profiles |
| `/minors` | Minor League | Farm system updates |
| `/about` | About | Site information |
| `/contact` | Contact Form | Contact form page |

---

## Color Scheme

- **Primary background:** `#a5b4d1` (Light slate blue)
- **Navbar/Footer:** `#1A252F` (Dark navy)
- **Accent color:** `#3498db` (Blue)
- **Text:** `#333` (Dark gray), Headings: `#2c3e50` (Slate blue-gray)

---

## Features Summary

- ✅ Client-side routing with React Router (no page reloads)
- ✅ Smooth scroll-to-top on navigation changes
- ✅ Responsive design for mobile/desktop
- ✅ Active state highlighting on navigation links
- ✅ Two-column card layouts on topic pages
- ✅ Consistent color scheme throughout

---

## License

Free to use and modify. No restrictions.
