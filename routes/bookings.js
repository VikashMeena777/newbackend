const express = require('express');
const Booking = require('../models/Booking');
const { protect } = require('../middlewares/auth');
const router = express.Router();


// create booking
router.post('/', protect, async (req, res) => {
    const data = { userId: req.user._id, serviceId: req.body.serviceId, date: req.body.date };
    const b = await Booking.create(data);
    res.status(201).json(b);
});
// list for user
router.get('/me', protect, async (req, res) => {
    const list = await Booking.find({ userId: req.user._id }).populate('serviceId');
    res.json(list);
});


module.exports = router;