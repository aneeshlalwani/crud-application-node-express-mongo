/* This file is the BRAIN of Server */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/product.model.js');

app.use(express.json());

// GET
app.get('/', (req, res) => {
    res.json({
        "name": "aneesh",
    });
})

// POST API
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({messgae: error.message});
    }
})
// connecting database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('DB Connected...');
    app.listen(3000, () => {
    console.log('server listening on port 3000......');
})}).catch(()=>{
    console.log('Connection Failed!');
})


