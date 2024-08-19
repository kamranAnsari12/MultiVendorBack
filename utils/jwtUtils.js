const jwt = require('jsonwebtoken');

// Load the JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecretKey'; // Fallback to 'defaultSecretKey' if not set

/**
 * Generate a JWT token.
 * @param {Object} payload - The payload to include in the token (e.g., user ID, role).
 * @param {String} expiresIn - The expiration time for the token (e.g., '1h', '7d').
 * @returns {String} - The generated JWT token.
 */
const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

/**
 * Verify a JWT token.
 * @param {String} token - The token to verify.
 * @returns {Object|Boolean} - The decoded payload if the token is valid, or false if invalid.
 */
const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        console.error('Token verification failed:', err.message);
        return false;
    }
};

module.exports = {
    generateToken,
    verifyToken
};
