import axios from "axios";

const baseUrl = "http://localhost:8000";


export const getAllCourses = async () => {
    try {
        return await axios.get(`${baseUrl}/courses`)
    } catch (err) {
        return err.response;
    }
}

export const getAllChapterByCourseId = async (id) => {
    try {
        return await axios.get(`${baseUrl}/${id}`)
    } catch (err) {
        return err.response;
    }
}