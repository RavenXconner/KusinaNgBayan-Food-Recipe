const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Ensure correct MIME types for static files
app.use((req, res, next) => {
  const extname = path.extname(req.path);
  if (extname === '.js') {
    res.setHeader('Content-Type', 'application/javascript');
  } else if (extname === '.css') {
    res.setHeader('Content-Type', 'text/css');
  }
  next();
});

// Fallback to index.html for all routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
