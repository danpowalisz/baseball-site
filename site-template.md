# Baseball Information Website - Build Template

This document explains how to build the Baseball Info website from scratch. Follow these steps to replicate the site.

## Prerequisites

- Node.js installed (v16 or higher)
- A code editor (VS Code recommended)

## File Structure

```
baseball-site/
├── package.json          # Dependencies and scripts
├── server.js             # Express server for local development
├── public/
│   ├── index.html        # Homepage
│   ├── style.css         # Main stylesheet
│   ├── current.html      # Current events page
│   ├── past.html         # Historical page
│   ├── hof.html          # Hall of Fame page
│   ├── minors.html       # Minor League page
│   ├── contact.html      # Contact form page
│   └── images/           # All image assets
│       ├── background.png     # Homepage hero background
│       ├── current_news.png   # Current events icon/image
│       ├── past.png           # History icon/image
│       ├── hall_of_fame.png   # Hall of Fame icon/image
│       ├── minor_league.png   # Minor League icon/image
│       └── profile.png        # About section photo
└── site-template.md      # This file
```

## Step 1: Setup Project

### 1. Create project folder
```bash
mkdir baseball-site
cd baseball-site
```

### 2. Initialize npm project
```bash
npm init -y
```

### 3. Install dependencies
```bash
npm install express lodash --save
```

## Step 2: Create package.json

Create `package.json` with this content:

```json
{
  "name": "baseball-site",
  "version": "1.0.0",
  "description": "A baseball information website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.21.2",
    "lodash": "^4.17.21"
  }
}
```

## Step 3: Create Server File (server.js)

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3009;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

## Step 4: Create CSS Stylesheet (public/style.css)

Copy the complete stylesheet with these key sections:

### Global Styles
```css
* {
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}
```

### Navbar Styles
```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #2c3e50;
    box-shadow: none;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #3498db;
}
```

### Hero Section Styles
```css
.hero-section {
    height: 100vh;
    background-image: url('images/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 100px;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    color: #ffffff;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-content p {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 1px;
}
```

### Topics Section Styles
```css
.topics-section {
    padding: 80px 20px;
    background-color: #f5f5f5;
}

.topics-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
}

.topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.topic-card {
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.topic-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.topic-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.topic-card h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 20px 15px 10px;
    color: #2c3e50;
}

.topic-card p {
    font-size: 0.95rem;
    margin-bottom: 15px;
    padding: 0 15px 25px;
}
```

### Contact Section Styles
```css
.contact-section {
    padding: 80px 20px;
    background-color: #2c3e50;
    color: #ffffff;
}

.contact-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    font-size: 1rem;
    margin-bottom: 8px;
    color: #ecf0f1;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #4a627a;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #bdc3c7;
}

.submit-btn {
    background-color: #3498db;
    border: none;
    padding: 15px 40px;
    border-radius: 8px;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Footer Styles */
.footer {
    padding: 30px 20px;
    background-color: #1a252f;
    text-align: center;
}
```

### Responsive Styles
```css
@media (max-width: 768px) {
    html {
        font-size: 14px;
    }

    .navbar {
        height: 50px;
    }

    .logo a {
        font-size: 1.2rem;
    }

    .nav-links {
        gap: 15px;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    .about-section h2,
    .topics-section h2,
    .contact-section h2 {
        font-size: 2rem;
    }
}
```

## Step 5: Create Homepage (public/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baseball Information Site</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Sticky Navbar -->
    <nav class="navbar">
        <div class="nav-container">
            <h1 class="logo"><a href="/">Baseball Info</a></h1>
            <ul class="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#topics">Topics</a></li>
                <li><a href="current.html">Current</a></li>
                <li><a href="past.html">Past</a></li>
                <li><a href="hof.html">Hall of Fame</a></li>
                <li><a href="minors.html">Minor League</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-content">
            <h1>Welcome to Baseball Info</h1>
            <p>Your source for everything baseball</p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <h2>About Us</h2>
            <div class="about-content">
                <img src="images/profile.png" alt="Profile Photo" class="profile-photo">
                <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements.</p>
            </div>
        </div>
    </section>

    <!-- Topics Section -->
    <section id="topics" class="topics-section">
        <div class="container">
            <h2>Topics</h2>
            <div class="topics-grid">
                <div class="topic-card">
                    <img src="images/current_news.png" alt="Current Events">
                    <h3><a href="current.html" style="color: inherit; text-decoration: none;">Current</a></h3>
                    <p>Latest news and updates from the baseball world</p>
                </div>
                <div class="topic-card">
                    <img src="images/past.png" alt="History">
                    <h3><a href="past.html" style="color: inherit; text-decoration: none;">Past</a></h3>
                    <p>Historical moments and legendary careers</p>
                </div>
                <div class="topic-card">
                    <img src="images/hall_of_fame.png" alt="Hall of Fame">
                    <h3><a href="hof.html" style="color: inherit; text-decoration: none;">Hall of Fame</a></h3>
                    <p>Celebrating the greatest players of all time</p>
                </div>
                <div class="topic-card">
                    <img src="images/minor_league.png" alt="Minor Leagues">
                    <h3><a href="minors.html" style="color: inherit; text-decoration: none;">Minor League</a></h3>
                    <p>The farm system and future stars</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
</body>
</html>
```

## Step 6: Create Topic Pages

### current.html (Current Events)
- Hero: `<h1>Current Events</h1>` - Latest news and updates
- Background: Use `images/current_news.png` style card layout
- Content articles with Lorem ipsum text about current baseball topics

### past.html (History)
- Hero: `<h1>Historical Moments</h1>` - Historical moments and legendary careers
- Background: Use `images/past.png` style card layout
- Content articles about baseball history with Lorem ipsum text

### hof.html (Hall of Fame)
- Hero: `<h1>Hall of Fame Legends</h1>` - Celebrating the greatest players
- Background: Use `images/hall_of_fame.png` style card layout
- Use inductee cards for Hall of Famers with Lorem ipsum text

### minors.html (Minor League)
- Hero: `<h1>Minor League Baseball</h1>` - The farm system and future stars
- Background: Use `images/minor_league.png` style card layout
- Content articles about minor league baseball with Lorem ipsum text

Each topic page structure:
```html
<!-- Sticky Navbar -->
<nav class="navbar">...</nav>

<!-- Hero Section -->
<section id="hero" class="hero-section">
    <div class="hero-content">
        <h1>[Title]</h1>
        <p>[Subtitle]</p>
    </div>
</section>

<!-- Content Section -->
<section id="content" class="content-section">
    <div class="container">
        <div class="content-wrapper">
            <h2>[Section Title]</h2>
            <div class="article-grid">
                <!-- Article/Inductee cards with images and Lorem ipsum content -->
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer">...</footer>
```

### contact.html (Contact Form)
- Hero: `<h1>Contact Us</h1>` - We'd love to hear from you!
- Background: Use `images/background.png` style
- Contact form with name, email, and message fields

## Step 7: Create Image Files

Create the following images in `public/images/`:

| Filename | Usage | Dimensions |
|----------|-------|------------|
| `background.png` | Homepage hero background | 1920x1080 or similar banner |
| `current_news.png` | Current events topic icon | 256x256 or appropriate ratio |
| `past.png` | History topic icon | 256x256 or appropriate ratio |
| `hall_of_fame.png` | Hall of Fame topic icon | 256x256 or appropriate ratio |
| `minor_league.png` | Minor League topic icon | 256x256 or appropriate ratio |
| `profile.png` | About section photo | 250x250 (uses border-radius) |

Tip: Use placeholder image services like [placehold.co](https://placehold.co) or [unsplash.com](https://unsplash.com) to create sample images.

## Step 8: Start the Server

```bash
npm start
```

Visit `http://localhost:3009` in your browser.

## Key Design Notes

1. **Persistent Navbar**: The navigation bar is fixed at the top for easy access
2. **Topic Cards**: Each topic has its own page with unique background imagery
3. **Color Scheme**:
   - Primary: `#2c3e50` (dark blue-gray)
   - Accent: `#3498db` (blue)
   - Background: `#f5f5f5` (light gray)
   - Footer dark: `#1a252f`

4. **Typography**: Roboto font family
5. **Responsive**: Mobile-friendly with breakpoints at 768px

## Customization Tips

- Change colors in `style.css` by updating the hex codes
- Replace images with your own assets
- Modify Lorem ipsum text with actual content
- Adjust grid columns using CSS Grid settings