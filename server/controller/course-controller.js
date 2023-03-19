import Course from "../schema/course-schema.js";

export const getAllCourse = async (req, res) => {
    try {
        let courses = await Course.find({});
        res.status(200).json(courses);

    } catch (error) {
        res.status(409).json({ "message": error.message })
    }
}

export const getAllChapterByCourseId = async (req, res) => {
    try {
        let course = await Course.find({ _id: req.params.id });
        res.status(200).json(course[0].chapter);

    } catch (error) {
        res.status(409).json({ "message": error.message })
    }
}

