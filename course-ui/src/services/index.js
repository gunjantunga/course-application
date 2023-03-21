import axios from "axios";

const baseUrl = "http://localhost:8000";


export const createNewUser = async (data) => {
    try {
        return await axios.post(`${baseUrl}/signup`, data)
    } catch (err) {
        return err.response;
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${baseUrl}/authenticate`, data)
    } catch (err) {
        return err.response;
    }
}

export const getAllCourses = async () => {
    try {
        return await axios.get(`${baseUrl}/courses`)
    } catch (err) {
        return err.response;
    }
}

export const getAllChapterByCourseId = async (courseId) => {
    try {
        return await axios.get(`${baseUrl}/${courseId}`)
    } catch (err) {
        return err.response;
    }
}
