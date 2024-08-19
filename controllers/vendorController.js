const Vendor = require('../models/Vendor');

exports.createVendor = async (req, res) => {
    const { name, description } = req.body;
    try {
        const vendor = await Vendor.create({ name, description, user: req.user.id });
        res.status(201).json({ success: true, data: vendor });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
