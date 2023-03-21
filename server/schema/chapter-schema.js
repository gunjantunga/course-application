import mongoose, { Types } from "mongoose";

const chapterSchema = mongoose.Schema({
    name: String,
    courseId: { type: Types.ObjectId, ref: "courses" },
    _id: { type: Types.ObjectId },
    description: String,
    view: Boolean
})

const Chapter = mongoose.model('chapters', chapterSchema);
export default Chapter;