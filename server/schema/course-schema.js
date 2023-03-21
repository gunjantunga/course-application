import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    description: String,
})

const Course = mongoose.model('courses', courseSchema);
export default Course;
