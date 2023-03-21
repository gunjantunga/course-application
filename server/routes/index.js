import express from "express";
import { getAllCourse } from "../controller/course-controller.js";
import { registerUser, loginUser } from "../controller/user-controller.js";
import { getAllChapterByCourseId } from "../controller/chapter-controller.js";

const Routes = express.Router();

//user
Routes.post('/signup', registerUser);
Routes.post('/authenticate', loginUser);

//courses
Routes.get('/courses', getAllCourse);

//chapters
Routes.get('/:courseId', getAllChapterByCourseId);

export default Routes;