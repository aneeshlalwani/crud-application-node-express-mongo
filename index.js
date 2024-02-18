/* This file is the BRAIN of Server */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// get
app.get('/', (req, res) => {
    res.json({
        "name": "aneesh",
    });
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


