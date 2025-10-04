// index.js

// Import required libraries
const express = require('express');  // Express framework
const cors = require('cors');        // Allows cross-origin requests (frontend <-> backend)
require('dotenv').config();          // Loads environment variables from .env

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000; // Port from .env or default 5000

// Middleware
app.use(cors());            // Enable CORS
app.use(express.json());    // Parse incoming JSON requests

// Example route to test server
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
