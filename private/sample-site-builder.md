# Baseball Info - Complete Site Builder Guide

**Version:** 1.0.0  
**Framework:** React + Vite + React Router  
**Port:** 3509  
**Last Updated:** 2026-04-16

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Setup](#step-by-step-setup)
4. [File Structure](#file-structure)
5. [Component Breakdown](#component-breakdown)
6. [Routes and Navigation](#routes-and-navigation)
7. [Running the Site](#running-the-site)
8. [Production Build](#production-build)
9. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Baseball Info** is a modern React single-page application (SPA) that provides comprehensive baseball coverage across multiple topic areas. It features:

- **Client-side routing** - No page reloads, instant navigation
- **Smooth scrolling** - Auto-scrolls to top on route changes
- **Consistent navigation** - Navbar highlights active route
- **Responsive design** - Works on desktop and mobile devices
- **Modern build tooling** - Vite for fast development and optimized production builds

### Coverage Areas

| Route | URL | Description |
|-------|-----|-------------|
| Home | `/` | Topics grid linking to sub-pages + About section |
| Current Events | `/current` | Latest baseball news and updates |
| Historical Moments | `/past` | Historic moments and legendary careers |
| Hall of Fame | `/hof` | Celebrating greatest players of all time |
| Minor League Baseball | `/minors` | Farm system and future stars |
| About | `/about` | Site information and profile |
| Contact | `/contact` | Contact form for inquiries |

### Key Features

- **Sticky navbar** - Always visible at top with active state highlighting
- **Dark theme components** - Navbar (#1A252F) and Footer (#1A252F)
- **Blue accent color** - Links and buttons use #3498db
- **Hero sections** - Blue background (#3498db) on homepage, dark slate (#2c3e50) on topic pages
- **Card layouts** - Two-column grid with images (~40% width) + content area
- **Image optimization** - Images serve at `100%` width with fixed heights

---

## Prerequisites

Before starting, ensure you have the following installed:

### Required Software

| Software | Version | Download Link |
|----------|---------|---------------|
| Node.js | v18 or higher | https://nodejs.org/ |
| npm | Comes with Node.js | (No separate download needed) |
| Git | Any version | https://git-scm.com/ |

### Verification Commands

Run these commands in your terminal to verify installations:

```bash
node --version      # Should show v18.x or higher
npm --version       # Should show 9.x or higher
git --version       # Should show git version number
```

### Optional Tools

- **VS Code** - Recommended code editor (https://code.visualstudio.com/)
- **Postman** - For testing API endpoints (if you add a backend later)
- **Figma/Photoshop** - For designing custom images

---

## Step-by-Step Setup

### Step 1: Create Project Directory

Open your terminal or command prompt and create a new directory:

```bash
# Navigate to your preferred location (or create new folder)
cd ~/Projects

# Create project directory
mkdir baseball-site
cd baseball-site
```

### Step 2: Initialize Vite React Project

Run the Vite CLI to scaffold a new React project:

```bash
npm create vite@latest . -- --template react
```

**Important:** The `.` at the end tells Vite to use the current directory. When prompted:

- **Project name:** You can enter any name (e.g., `baseball-site`)
- **Framework:** React (this is already selected by default)
- **Styling:** Select "CSS" (you'll add all styles yourself)

Press Enter for defaults when not sure.

### Step 3: Install Dependencies

Install the core dependencies:

```bash
npm install react-router-dom
```

This installs React Router which handles client-side navigation.

### Step 4: Delete Default Template Files

The Vite template includes files we don't need. Remove them:

```bash
# Windows PowerShell / CMD:
Remove-Item src/App.css -Force
Remove-Item src/App.jsx -Force
Remove-Item src/App.html -Force

# OR on macOS/Linux:
rm src/App.css
rm src/App.jsx
rm src/App.html
```

### Step 5: Create Project Structure

Create the necessary directories:

```bash
mkdir public/images
mkdir src/components
mkdir src/pages
```

Your project structure should now be:

```
baseball-site/
├── public/
│   └── images/              # For static image assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Route-specific page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Current.jsx
│   │   ├── Past.jsx
│   │   ├── HallOfFame.jsx
│   │   └── Minors.jsx
│   ├── App.jsx              # Main app with router
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── images/              # Image assets
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

---

## Creating the Files

### Step 6: Create Entry HTML File (`public/index.html`)

Create `public/index.html`:

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

### Step 7: Create Global Styles (`src/index.css`)

Create `src/index.css` with all styles:

```css
/* Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

/* Navbar */
.navbar {
  background-color: #1A252F;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db;
}

/* Footer */
.footer {
  background-color: #1A252F;
  color: #ecf0f1;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

#content {
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
}

/* Hero Section */
.hero-section,
.hero {
  background-color: #3498db;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Topics Grid */
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.topic-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
  padding: 1.5rem;
}

.topic-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.topic-card h3,
.topic-card p {
  margin: 0.5rem 0;
}

/* Container and Grid Layouts */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  align-items: start;
}

/* Article Cards */
.topic-page-grid {
  display: grid;
  gap: 2rem;
}

.topic-page-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.topic-page-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.topic-page-card .topic-content {
  padding: 1.5rem;
}

.topic-page-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.topic-page-card p {
  color: #666;
}

/* Hero Page Variant */
.hero-page {
  background-color: #2c3e50;
}

/* Contact Form */
.contact-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2980b9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .two-column-grid {
    grid-template-columns: 1fr;
  }

  .topic-card img {
    height: 140px;
  }

  .topic-page-card img {
    height: 200px;
  }
}
```

### Step 8: Create Navbar Component (`src/components/Navbar.jsx`)

Create `src/components/Navbar.jsx`:

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <NavLink to="/" style={({ isActive }) => 
            ({ color: isActive ? '#3498db' : '#ecf0f1' })
          }>Baseball Info</NavLink>
        </h1>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
              to="/current" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Current</NavLink>
          </li>
          <li>
            <NavLink 
              to="/past" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Past</NavLink>
          </li>
          <li>
            <NavLink 
              to="/hof" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Hall of Fame</NavLink>
          </li>
          <li>
            <NavLink 
              to="/minors" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Minor League</NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >About</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3498db' : '#ecf0f1' 
              })}
            >Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
```

### Step 9: Create Footer Component (`src/components/Footer.jsx`)

Create `src/components/Footer.jsx`:

```jsx
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Baseball Info. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
```

### Step 10: Create Layout Component (`src/components/Layout.jsx`)

Create `src/components/Layout.jsx`:

```jsx
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main id="content">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
```

### Step 11: Create Home Page (`src/pages/Home.jsx`)

Create `src/pages/Home.jsx`:

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
            <img src="/images/current_news.png" alt="Current Events" />
            <h3><Link to="/current" style={{ color: 'inherit', textDecoration: 'none' }}>Current</Link></h3>
            <p>Latest news and updates from the baseball world</p>
          </div>

          <div className="topic-card">
            <img src="/images/past.png" alt="History" />
            <h3><Link to="/past" style={{ color: 'inherit', textDecoration: 'none' }}>Past</Link></h3>
            <p>Historical moments and legendary careers</p>
          </div>

          <div className="topic-card">
            <img src="/images/hall_of_fame.png" alt="Hall of Fame" />
            <h3><Link to="/hof" style={{ color: 'inherit', textDecoration: 'none' }}>Hall of Fame</Link></h3>
            <p>Celebrating the greatest players of all time</p>
          </div>

          <div className="topic-card">
            <img src="/images/minor_league.png" alt="Minor Leagues" />
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
          <img src="/images/profile.png" alt="Profile Photo" />
          <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements. Whether you're a lifelong fan or just getting into the game, we have something for everyone.</p>
        </div>
      </div>
    </section>
  </>
);

export default Home;
```

### Step 12: Create About Page (`src/pages/About.jsx`)

Create `src/pages/About.jsx`:

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
          <img src="/images/profile.png" alt="Profile Photo" />
          <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements. Whether you're a lifelong fan or just getting into the game, we have something for everyone.</p>
        </div>
      </div>
    </section>

    <section id="topics" className="topics-section">
      <div className="container">
        <h2>Explore More</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <img src="/images/current_news.png" alt="Current Events" />
            <h3><Link to="/current" style={{ color: 'inherit', textDecoration: 'none' }}>Current</Link></h3>
            <p>Latest news and updates from the baseball world</p>
          </div>

          <div className="topic-card">
            <img src="/images/past.png" alt="History" />
            <h3><Link to="/past" style={{ color: 'inherit', textDecoration: 'none' }}>Past</Link></h3>
            <p>Historical moments and legendary careers</p>
          </div>

          <div className="topic-card">
            <img src="/images/hall_of_fame.png" alt="Hall of Fame" />
            <h3><Link to="/hof" style={{ color: 'inherit', textDecoration: 'none' }}>Hall of Fame</Link></h3>
            <p>Celebrating the greatest players of all time</p>
          </div>

          <div className="topic-card">
            <img src="/images/minor_league.png" alt="Minor Leagues" />
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

### Step 13: Create Contact Page (`src/pages/Contact.jsx`)

Create `src/pages/Contact.jsx`:

```jsx
import { useState } from 'react';

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

### Step 14: Create Current Events Page (`src/pages/Current.jsx`)

Create `src/pages/Current.jsx`:

```jsx
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
            <article className="topic-page-card">
              <img src="/images/current_news.png" alt="Current news" />
              <div className="topic-content">
                <h3>Latest News</h3>
                <p>Sample description text goes here for the current events section.</p>
              </div>
            </article>
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

### Step 15: Create Past History Page (`src/pages/Past.jsx`)

Create `src/pages/Past.jsx`:

```jsx
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
            <article className="topic-page-card">
              <img src="/images/past.png" alt="Past moments" />
              <div className="topic-content">
                <h3>Historical Moment</h3>
                <p>Sample description text for historical baseball moments and legendary players.</p>
              </div>
            </article>
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

### Step 16: Create Hall of Fame Page (`src/pages/HallOfFame.jsx`)

Create `src/pages/HallOfFame.jsx`:

```jsx
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
            <article className="topic-page-card">
              <img src="/images/hall_of_fame.png" alt="Hall of Fame" />
              <div className="topic-content">
                <h3>Legendary Player</h3>
                <p>Sample description for a Hall of Fame inductee.</p>
              </div>
            </article>
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

### Step 17: Create Minor League Page (`src/pages/Minors.jsx`)

Create `src/pages/Minors.jsx`:

```jsx
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
            <article className="topic-page-card">
              <img src="/images/minor_league.png" alt="Minor League Baseball" />
              <div className="topic-content">
                <h3>Farm System Update</h3>
                <p>Sample description for minor league baseball news and prospects.</p>
              </div>
            </article>
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

### Step 18: Create Main App Router (`src/App.jsx`)

Create `src/App.jsx`:

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
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/current" element={<Current />} />
        <Route path="/past" element={<Past />} />
        <Route path="/hof" element={<HallOfFame />} />
        <Route path="/minors" element={<Minors />} />
      </Routes>
    </Layout>
  );
}

export default App;
```

### Step 19: Create Vite Configuration (`vite.config.js`)

Create `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 3509, open: false },
});
```

### Step 20: Update package.json Scripts

Edit `package.json` to ensure the dev script uses the correct port:

Find the `"scripts"` section and verify/update it:

```json
"scripts": {
  "dev": "vite --port 3509",
  "build": "vite build",
  "preview": "vite preview",
},
```

### Step 21: Add Images to public Folder

Place your images in `public/images/`:

| File | Description |
|------|-------------|
| `current_news.png` | For current events section |
| `past.png` | For historical moments section |
| `hall_of_fame.png` | For Hall of Fame section |
| `minor_league.png` | For minor leagues section |
| `profile.png` | For about/contact pages |

You can create placeholder images using any image editor or use free stock photo sites.

---

## Routes and Navigation

### Route Definitions

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | `<Home />` | Homepage with topics grid and about section |
| `/about` | `<About />` | About page with site information |
| `/contact` | `<Contact />` | Contact form page |
| `/current` | `<Current />` | Current events topic page |
| `/past` | `<Past />` | Historical moments topic page |
| `/hof` | `<HallOfFame />` | Hall of Fame inductees page |
| `/minors` | `<Minors />` | Minor league baseball page |

### Navigation Active State

The Navbar uses React Router's `NavLink` component with inline styles to highlight the active route:

```jsx
<NavLink 
  to="/current" 
  style={({ isActive }) => ({ 
    color: isActive ? '#3498db' : '#ecf0f1' 
  })}
>Current</NavLink>
```

When `isActive` is true, the link turns blue (`#3498db`).

---

## Running the Site

### Development Server

To start the development server:

```bash
npm run dev
```

This will:
- Start Vite's development server on **http://localhost:3509**
- Enable hot module replacement (HMR) for instant preview of changes
- Open your default browser automatically (set `open: true` in vite.config.js to disable)

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

### Accessing the Site

Open your web browser and navigate to:

```
http://localhost:3509/
```

---

## Production Build

To create an optimized production build for deployment:

```bash
npm run build
```

This creates a `dist/` folder containing:
- Optimized JavaScript bundles
- Minified CSS
- HTML file ready for static hosting

### Deploying to Static Hosting

Upload the contents of `dist/` to your hosting provider:

| Platform | How to Deploy |
|----------|---------------|
| **GitHub Pages** | Upload to repository, enable GitHub Pages in Settings |
| **Netlify** | Drag and drop `dist/` folder or connect Git repo |
| **Vercel** | Connect GitHub repository via Vercel dashboard |
| **AWS S3** | Upload files to S3 bucket with appropriate static website hosting configuration |

### Preview Production Build

Before deploying, preview the production build:

```bash
npm run preview
```

---

## Customizing the Site

### Changing Colors

All colors are defined in `src/index.css`. Key color classes:

| Element | Default Color | Variable Location |
|---------|---------------|-------------------|
| Navbar background | `#1A252F` | Line 16 in index.css |
| Hero section (home) | `#3498db` | Line ~76 in index.css |
| Hero section (pages) | `#2c3e50` | In page component JSX |
| Active link color | `#3498db` | Inline style in Navbar.jsx |

### Adding New Routes

1. Create a new page component in `src/pages/`:
   ```bash
   touch src/pages/NewPage.jsx
   ```

2. Add route definition in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   
   <Route path="/new" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/Navbar.jsx`:
   ```jsx
   <li>
     <NavLink to="/new">New Page</NavLink>
   </li>
   ```

### Adding More Content Cards

For topic pages (Current, Past, HOF, Minors), add more cards by duplicating the article block:

```jsx
<article className="topic-page-card">
  <img src="/images/current_news.png" alt="Article Title" />
  <div className="topic-content">
    <h3>Article Title</h3>
    <p>Description goes here.</p>
  </div>
</article>
```

---

## Troubleshooting

### Port Already in Use

If you get an error that port 3509 is busy:

1. **Windows:** Run in PowerShell:
   ```powershell
   Get-NetTCPConnection -LocalPort 3509 | Select-Object OwningProcess
   Stop-Process -Id <PID> -Force
   ```

2. **macOS/Linux:** Run in terminal:
   ```bash
   lsof -ti:3509 | xargs kill -9
   ```

3. **Or change the port** by editing `vite.config.js`:
   ```js
   server: { port: 5173, open: false },  // Change this number
   ```

### Images Not Loading

Ensure images are in `public/images/` and paths use `/images/` (not `./images/`).

Vite serves assets from the `public/` directory at their relative path.

### Build Fails

Common issues:
- Missing dependency: Run `npm install` again
- Syntax error: Check console for specific line numbers
- Large files: Vite handles large bundles well, but minify unused imports

---

## File Reference Summary

| File | Purpose | Key Lines |
|------|---------|-----------|
| `public/index.html` | Entry HTML with root div | Script import at bottom |
| `src/main.jsx` | React entry point | BrowserRouter wrapper, CSS import |
| `src/App.jsx` | Route definitions | Layout wrapper + Routes/Routes |
| `src/index.css` | Global styles | Reset, navbar, footer, hero, cards |
| `src/components/Navbar.jsx` | Navigation bar | NavLink components with active state |
| `src/components/Footer.jsx` | Footer component | Copyright text |
| `src/components/Layout.jsx` | Layout wrapper | Navbar + content + Footer |
| `src/pages/*.jsx` | Route page components | Page-specific content |
| `vite.config.js` | Vite configuration | React plugin, port, base path |
| `package.json` | Dependencies and scripts | dev/build/preview commands |

---

## Development Workflow

### Typical Development Session

1. **Start dev server:** `npm run dev`
2. **Make changes** to any file (JSX or CSS)
3. **Vite hot-reloads** automatically
4. **Browser refreshes** with updated content
5. **Test navigation** between all routes
6. **Test responsive design** by resizing browser
7. **Commit changes** when done

### Committing Changes (Git)

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

---

## Next Steps & Enhancements

Once the basic site is working, consider these enhancements:

### Backend Integration

Replace the demo contact form with actual API calls:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Add API Integration

Install and use a data fetching library like Axios or React Query for fetching baseball stats, news, etc. from external APIs.

### SEO Optimization

Add metadata for better search engine visibility:

```html
<meta name="description" content="Comprehensive baseball information covering current events, history, Hall of Fame, and minor leagues." />
<meta name="keywords" content="baseball, sports, hof, minor league, current events" />
<link rel="canonical" href="https://yoursite.com/" />
```

### Analytics Integration

Add Google Analytics or similar tracking:

```html
<!-- Add in public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXX-Y');
</script>
```

---

## Support & Resources

### Official Documentation

- **React:** https://react.dev/learn
- **React Router:** https://reactrouter.com/docs
- **Vite:** https://vitejs.dev/guide
- **JavaScript MDN:** https://developer.mozilla.org/en-US/docs/Web/JavaScript

### Design Assets

Free resources for custom images:
- Unsplash: https://unsplash.com/ (free high-quality photos)
- Pexels: https://www.pexels.com/ (free stock photos)
- Wikipedia Commons: https://commons.wikimedia.org/ (public domain images)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-16 | Initial release with React SPA migration complete |

---

**End of Guide**

*For questions or issues, please refer to the project documentation or submit an issue on GitHub.*
