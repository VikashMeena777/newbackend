// run with: node seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Service = require('./models/Service');


dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(async () => {
    await Product.deleteMany();
    await Service.deleteMany();
    await Product.insertMany([
        { name: 'Instagram Growth Course', description: 'Learn strategies to grow your Instagram.', price: 4999 },
        { name: 'Content Creation Guide', description: 'Master content creation for social media.', price: 2999 },
        { name: 'Reels Bundle Pack (100 Videos)', description: '100 viral-ready reels', price: 5999 },
        { name: 'Social Media Automation Tools Pack', description: 'Tools & scripts for automation.', price: 3499 }
    ]);
    await Service.insertMany([
        { name: 'Instagram Growth Service', description: 'Guaranteed follower growth.', price: 4999, duration: '1 month' },
        { name: 'Brand Promotion Package', description: 'Promote your brand on trending pages.', price: 5999, duration: '1 campaign' },
        { name: 'Reels Creation Service', description: 'Custom reels per niche.', price: 599, duration: 'per reel' },
        { name: 'Complete Social Media Management', description: 'Full management.', price: 14999, duration: 'month' },
        { name: 'Ad Campaign Management', description: 'Ad setup & optimization.', price: 9999, duration: 'per campaign' }
    ]);
    console.log('Seeded!');
    process.exit();
}).catch(err => { console.error(err); process.exit(1) });