# Baseball Info Site Builder Guide

## Overview
Interactive baseball information website built with React + Vite. Features client-side routing, smooth page transitions, and a responsive design that works on desktop and mobile devices.

## File Structure
```
baseball-site/
  public/
    images/              # Static image assets
      - current_news.png
      - past.png
      - hall_of_fame.png
      - minor_league.png
      - profile.png
  src/
    main.jsx             # React entry point with router
    App.jsx              # Main app with route definitions
    components/          # Reusable UI components
      - Navbar.jsx       # Navigation bar with active state highlighting
      - Footer.jsx       # Site footer
      - Layout.jsx       # Wrapper component with scroll-to-top behavior
    pages/               # Route page components
      - Home.jsx         # Homepage with topics grid and about section
      - About.jsx        # About page with profile info
      - Contact.jsx      # Contact form page
      - Current.jsx     # Current events topic page
      - Past.jsx        # Historical moments topic page
      - HallOfFame.jsx  # Hall of Fame inductees page
      - Minors.jsx      # Minor league baseball page
    data/                # Static content data
      - currentArticles.js
      - pastArticles.js
      - hofInductees.js
      - minorsArticles.js
  vite.config.js         # Vite build configuration
  package.json           # Dependencies and scripts

## Routes
| URL          | Page Description                           |
|--------------|--------------------------------------------|
| /            | Home - Topics grid with about section      |
| /current     | Current events with latest baseball news   |
| /past        | Historical moments and legendary careers   |
| /hof         | Hall of Fame inductees                     |
| /minors      | Minor league farm system news              |
| /about       | About page with site information           |
| /contact     | Contact form                              |

## Features
- **Client-side routing** - No page reloads, instant navigation between pages
- **Smooth scrolling** - Auto-scrolls to top on route changes
- **Responsive design** - Mobile-friendly with media queries
- **Active state highlighting** - Navigation highlights current page
- **Two-column card layouts** - Images (50% width) + content sections
- **Consistent color scheme** - Light slate blue (#a5b4d1) background, dark navy (#1A252F) navbar/footer

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Opens http://localhost:5173 in browser with hot-reload.

### Production Build
```bash
npm run build
```
Creates optimized bundle in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## Styling Notes
- All CSS styles are embedded in the HTML for simplicity
- Uses React Router NavLink for active state highlighting
- Two-column flexbox layouts for topic cards (image left, content right)
- Responsive breakpoints at 768px width

## Color Scheme
- Body/Topic background: `#a5b4d1` (light slate blue)
- Navbar/Footer: `#1A252F` (dark navy)
- Accent color: `#3498db` (blue)
- Text: `#333`, headings: `#2c3e50`

## Development Tips
1. Images are served from `public/images/` folder
2. React Router handles all navigation without page reloads
3. Data files in `src/data/` contain static article/inuctee content
4. Layout component wraps every route with Navbar/Footer
