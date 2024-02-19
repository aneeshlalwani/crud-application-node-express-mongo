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

// GET API FOR GETTING ALL PRODUCTS DATA
app.get('/api/products', async (req, res) =>{
    try {
        const products = await Product.find(({}))
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET API FOR GETTING PRODUCT BY ID
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error});
        }
})

// PUT API TO UPDATE A PARTICULAR PRODUCT BY ID
app.put('/api/product/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) return res.status(404).json({ message: 'Product not found' });
        
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error});
    }
})

//  DELETE API TO DELETE A PARTICULAR PRODUCT
app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
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


