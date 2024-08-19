const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { products, totalAmount } = req.body;
    try {
        const order = await Order.create({ customer: req.user.id, products, totalAmount });
        res.status(201).json({ success: true, data: order });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
