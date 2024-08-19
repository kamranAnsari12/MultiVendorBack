const express = require('express');
const { createVendor } = require('../controllers/vendorController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createVendor);

module.exports = router;
