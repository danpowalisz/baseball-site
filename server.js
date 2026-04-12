// Baseball Site Express Server
// Intentionally unoptimized for demonstration purposes

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3509;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// No cache headers (intentionally unoptimized)
app.disable('etag');
app.set('etag', false);

// Start server
app.listen(PORT, () => {
  console.log(`Baseball site server running on http://localhost:${PORT}`);
});
