require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.error('Error connectiong to MongoDB', error)
})

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on Port: 5000")
})
