import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    description: String,
    chapter: Array
})

const Course = mongoose.model('courses', courseSchema);
export default Course;
