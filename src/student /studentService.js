const studentModel = require('./studentModel');

class studentService {

    constructor() {
        console.log("In student service");
    }

    async createStudent(body) {
        try {
            return await studentModel.create(body);

        }
        catch (error) {
            throw error;
        }

    }

    async getAllStudent() {

        try {
            return await studentModel.find();
        }
        catch (error) {
            throw error;
        }

    }


    async getStudentById(id) {

        try {
            return await studentModel.findById(id );
        
        }
        catch (error) {
            throw error;

        }

    }

    async updateStudent(id, body) {
        try {

            const studentUpdate = {

                name : body.name,
                fatherName : body.fatherName,
                age : body.age,
                class : body.class

            };


            return await studentModel.findByIdAndUpdate(id, studentUpdate , {new : true});
            

        }
        catch (error) {
            throw error;
        }

    }

    async deleteStudent(id) {

        try {
            
            const student = await studentModel.deleteOne({ _id: id });
            return student;
        }

        catch (error) {
            throw error;

        }

    }

}

module.exports = new studentService();