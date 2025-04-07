const express = require('express');
const customerRoutes = require('./routes/customer');
const cors = require('cors'); // Import CORS
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Use CORS middleware
app.use('/api/customers', customerRoutes); // Customer routes

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
