const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const studentSchema = new Schema({
    
    name: {
        type: String,
        required : true
    },

    fatherName: {
        type: String,
        required : true
    },

    age: {
        type: Number,
        required: true,
        min: 3,
        max: 22
    },
    class: {
        type: Number,
        min: 1,
        max: 12
    }

});
module.exports = Model('studentModel', studentSchema);