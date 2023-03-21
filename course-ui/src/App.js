import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/course-page';
import NavBar from './components/navigate';
import ChapterDetails from './components/chapter-details';
import { getAllCourses } from './services';
import { useState } from 'react';
import { createContext } from 'react';
import Signin from './components/sign-in';
import Signup from './components/sign-up';
import { getAllChapterByCourseId } from './services';

export const CourseContext = createContext();

function App() {

  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);

  const getAllCourseData = async () => {
    let { data } = await getAllCourses();
    setCourses(data);
  }

  const getAllChapter = async (courseId) => {
    let { data } = await getAllChapterByCourseId(courseId)
    setChapters(data);
    localStorage.setItem('chapters', JSON.stringify(data));
  }
  return (
    <div className="App">
      <CourseContext.Provider value={{ courses, chapters }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/courses' element={<Courses getAllCourseData={getAllCourseData} />} />
            <Route path='/:courseId' element={<ChapterDetails getAllCourseData={getAllCourseData} getAllChapter={getAllChapter} />} />
            <Route path='/:courseId/:chapterId' element={<ChapterDetails getAllCourseData={getAllCourseData} getAllChapter={getAllChapter} />} />

          </Routes>
        </Router>
      </CourseContext.Provider>
    </div>
  );
}

export default App;
