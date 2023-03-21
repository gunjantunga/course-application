import Course from "../schema/course-schema.js";

export const getAllCourse = async (req, res) => {
    try {
        let courses = await Course.find({});
        res.status(200).json(courses);

    } catch (error) {
        res.status(409).json({ "message": error.message })
    }
}
