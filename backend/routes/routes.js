// 1). put your requirements, express, router, model
const express = require('express');
const router = express.Router();
const Model = require('../models/model');

// 2). endpoints.... CRUD

    // post 200 / 400
    // post endpoint status: works
    router.post('/post', async (req, res) => {
        //res.send('Test POST Endpoint');
        const task = new Model({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status,
            priority: req.body.priority
        })

        try {
            const saveTask = await task.save();
            res.status(200).json(saveTask);
        }
        catch(error){
            res.status(400).json({
                message: error.message
            });
        }

    })

    // get 200 / 500
    // get endpoint status: works
    router.get('/getAll', async (req, res) => {
        //res.send('Test GET Endpoint');
        try{
            const data = await Model.find();
            res.json(data);
        }
        catch(error){
            res.status(500).json({
                message: error.message
            });
        }

    })

    // get endpoint status: works
    router.get('/getOne/:id', async (req, res) => {
        //res.send(req.params.id);
        try{
            const data = await Model.findById(req.params.id);
            res.json(data)
        }
        catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    })

    // patch endpoint status: 
    router.patch('/patch/:id', async (req, res) => {
        //res.send('Test PATCH Endpoint');
        try {
            const id = req.params.id;
            const updatedTask = req.body;
            const options = { new: true };
    
            const result = await Model.findByIdAndUpdate(
                id, updatedTask, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ 
                message: error.message
            })
        }
    })

    // patch endpoint status: 
    router.delete('/delete/:id', async (req, res) => {
        //res.send('Test DELETE Endpoint');
        try {
            const id = req.params.id;
            const task = await Model.findByIdAndDelete(id)
            res.send(`${task.title} is deleted..`)
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    })

// 3). export router
module.exports = router;

/* CRUD?

/:id --> for specific item from db

CREATE --> POST tasks to my db (Make a new task) 200 / 400
READ   --> GET tasks from my db (Get all tasks or one specific task) 200 / 500
UPDATE --> PATCH tasks in my db (Update one specific task) 200 / 400
DELETE --> DELETE tasks from my db (Delete one specific task) 200 / 400

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

