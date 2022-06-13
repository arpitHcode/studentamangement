const mongoose = require('mongoose');
const express = require('express');
const studentRouter = express.Router();
const studentController= require('./studentController');


studentRouter.post('/' , studentController.createStudent);
studentRouter.get('/' , studentController.getAllStudent);
studentRouter.get('/:id' , studentController.getStudentById);
studentRouter.put('/:id' , studentController.updateStudent);
studentRouter.delete('/:id' , studentController.deleteStudent);    

module.exports = studentRouter;