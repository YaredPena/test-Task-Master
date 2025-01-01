/// 1). require express + require mongoose
const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

// 2). begin listening to the server

app.listen(3000, () => {
    console.log('Server running, port 3000');
})

// 3). DDC, dotenv, database, connection
require('dotenv').config();
const database = process.env.DB_URL;


