import express from "express";
import { getAllCourse, getAllChapterByCourseId } from "../controller/course-controller.js";
const Routes = express.Router();

Routes.get('/courses', getAllCourse);
Routes.get('/:id', getAllChapterByCourseId);
export default Routes;