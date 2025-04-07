const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables

// Generate a token
function generateToken(user) {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Example usage
const token = generateToken('testUser');
// Do not log the token in production
console.log(token);

// curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdFVzZXIiLCJpYXQiOjE3NDMwNjAxNjgsImV4cCI6MTc0MzA2Mzc2OH0.NS87GdBgtou4zK1MGscqX27YTKX2SO9R8wV7Toqn0Gs" http://localhost:3000/api/customers
