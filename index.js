/* This file is the BRAIN of Server */
const express = require('express');
const app = express();

// get
app.get('/', (req, res) => {
    res.json({
        "name": "aneesh",
    });
})

app.listen(3000, () => {
    console.log('server listening on port 3000......');
})
