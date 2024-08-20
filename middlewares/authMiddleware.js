const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) 
        {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ success: false, error: 'Not authorized' });
    }
};

// middlewares/authMiddleware.js

exports.vendorAuth = async (req, res, next) => {
    if (req.user.role !== 'vendor') {
        return res.status(403).json({ message: 'Access denied. Vendors only.' });
    }
    next();
};

