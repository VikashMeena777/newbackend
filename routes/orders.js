const express = require('express');
const Order = require('../models/Order');
const { protect } = require('../middlewares/auth');
const router = express.Router();


router.post('/', protect, async (req, res) => {
    // expected: productId, paymentStatus
    const o = await Order.create({ userId: req.user._id, productId: req.body.productId, paymentStatus: req.body.paymentStatus || 'pending' });
    res.status(201).json(o);
});
router.get('/me', protect, async (req, res) => res.json(await Order.find({ userId: req.user._id }).populate('productId')));


module.exports = router;