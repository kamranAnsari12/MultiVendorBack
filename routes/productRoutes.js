const express = require('express');
const { createProduct } = require('../controllers/productController.js');
const { protect } = require('../middlewares/authMiddleware.js');
const { vendorAuth } = require('../middlewares/authMiddleware.js');
const router = express.Router();

router.post('/',vendorAuth, protect, createProduct);

module.exports = router;
