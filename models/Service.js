const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    duration: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Service', serviceSchema);