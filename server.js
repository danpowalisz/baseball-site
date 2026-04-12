/**
 * Baseball Information Website - Express Server
 * Intentionally unoptimized setup:
 * - No gzip/brotli compression
 * - No cache headers
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3509;

// Set static folder with max age (no caching since no cache-control headers)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html as default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Enable CORS for development
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
