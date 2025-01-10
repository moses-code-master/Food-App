// Import required modules
const express = require('express');
const cors = require('cors'); // Enable CORS for cross-origin requests
const mongoose = require('mongoose'); // MongoDB object modeling tool

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/foodDeliveryApp'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Fast Food App!');
});

// Start the server
const PORT = 5000; // Use port 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});