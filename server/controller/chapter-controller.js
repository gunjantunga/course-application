import Chapter from "../schema/chapter-schema.js";


export const getAllChapterByCourseId = async (req, res) => {
    let { courseId } = req.params;
    try {
        let chapters = await Chapter.find({ courseId: courseId });
        res.status(200).json(chapters);

    } catch (error) {
        res.status(409).json({ "message": error.message })
    }
}