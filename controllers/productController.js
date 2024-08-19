const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, price, description, stock } = req.body;
    try {
        const product = await Product.create({ name, price, description, stock, vendor: req.user.id });
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
