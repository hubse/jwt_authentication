const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables
const router = express.Router();

// Middleware to verify JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Token is required for authentication' });
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Invalid token' });
        req.user = decoded;
        next();
    });
}

// Sample customer data
const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

router.get('/', verifyToken, (req, res) => {
    res.json(customers);
});

// GET a customer by ID
router.get('/:id', verifyToken, (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
});

module.exports = router;
