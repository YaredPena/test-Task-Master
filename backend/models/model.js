const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    // I didn't make this schema.
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    }
});

module.exports = mongoose.model('Task', dataSchema);

/* Schema Model Boiler Plate

&&& in model.js &&&
const mongoose = require('mongoose');

--> ACTUAL SCHEMA HERE <--

module.exports = mongoose.model('Data', dataSchema)

----------------------
what it needs 

const dataSchema = new mongoose.Schema({


*** INPUT YOUR SCHEMA HERE *** 



})


*/