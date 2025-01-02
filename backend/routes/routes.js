// 1). require express + require mongoose
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const User = require('../models/model'); <-- import later

// 2). endpoints.... CRUD

    router.post('/post', (req, res) => {
        res.send('Test POST Endpoint');
    })

    router.get('/getAll', (req, res) => {
        res.send('Test GET Endpoint');
    })

    router.get('/getOne/:id', (req, res) => {
        res.send(req.params.id);
    })

    router.patch('/patch/:id', (req, res) => {
        res.send('Test PATCH Endpoint');
    })

    router.delete('/delete/:id', (res, req) => {
        res.send('Test DELETE Endpoint');
    })

// 3). export router
module.exports = router;

/* CRUD?

/:id --> for specific item from db

CREATE --> POST tasks to my db (Make a new task)
READ   --> GET tasks from my db (Get all tasks or one specific task)
UPDATE --> PATCH tasks in my db (Update one specific task)
DELETE --> DELETE tasks from my db (Delete one specific task)

*/

/* Boiler Plate for routes.js + how to build endpoints

    router.someaction('/endpointname/' async (req, res) => {
        // test response
        //res.send('Test delete')

        try is just gonna want to do something when the endpoint is activated
        try{
        
        }

        catch will usually be catching an error
        catch(){
        
        }

        })
*/

