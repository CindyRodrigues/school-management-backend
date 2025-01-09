const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    gender: String,
    department: String,
    qualifications: String
})

const Teacher = mongoose.model('teacher', teacherSchema)

module.exports = { Teacher }