const mongoose = require('mongoose');

//schema is the format which database follow in upcoming entries

const todoschema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        required: true
    }
    //you can also predefine type of number like number starting from 91 etc

});

const todo = mongoose.model('todo', todoschema);

module.exports = todo;