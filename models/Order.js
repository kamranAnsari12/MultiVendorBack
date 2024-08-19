const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    totalAmount: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
