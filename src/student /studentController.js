const studentService = require('./studentService');

class studentController {

    constructor() {

        console.log(' in student controller');

    }

    async createStudent(req, res) {

        try {
            const body = {
                
                name: req.body.studentName,
                fatherName: req.body.fatherName,
                age: req.body.studentAge,
                class: req.body.studentClass

            };

            const result = await studentService.createStudent(body);
            res.status(201).send(result);
        }
        catch (error) {
            console.log(error);
            res.status(404).send(" Something went wrong while creating student.");
        }
    }
    async getAllStudent(req, res) {

        try {

            const result = await studentService.getAllStudent();
            console.log(result);
            //res.status(200).send("Student fetched");
            res.status(200).send(result);
        }
        catch (error) {

            console.log(error);
            res.status(404).send('Something Went Wrong while getting all student');
        }
    }


    async getStudentById(req, res) {

        try {

            const studentId = req.params.id;
            const result = await studentService.getStudentById(studentId);
            res.status(200).send(result);
        }
        catch (error) {

            console.log(error);
            res.status(404).send('Something Went Wrong');
        }
    }

    async updateStudent(req, res) {

        try {
            const id = req.params.id;
            const body = {
                name: req.body.name,
                fatherName: req.body.fatherName,
                age: req.body.age,
                class: req.body.class,

            };
            const result = await studentService.updateStudent(id,body);
            res.status(201).send(result);
        }
        catch (error) {
            console.log(error.message);
            res.status(404).send(" Something went wrong while updating student.");
        }
    }


    


    async deleteStudent(req, res) {

        try {

            const studentId = req.params.id;
            const result = await studentService.deleteStudent(studentId);
            res.status(201).send(result);
        }
        catch (error) {

            console.log(error);
            res.status(404).send('Something Went Wrong');
        }
    }
}


module.exports = new studentController() ;
