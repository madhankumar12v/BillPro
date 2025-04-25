// routes/products.js

const express = require('express');
const router = express.Router();

// Sample GET route for testing
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Test Product A', price: 100 },
    { id: 2, name: 'Test Product B', price: 200 }
  ]);
});

module.exports = router;
