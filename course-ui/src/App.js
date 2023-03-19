import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/course-page';
import NavBar from './components/navigate';
import ChapterDetails from './components/chapter-details';
import { getAllCourses } from './services';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const CourseContext = createContext();

function App() {

  const [courses, setCourses] = useState([]);


  async function getAllCourseData() {

    let { data } = await getAllCourses();

    setCourses(data);
  }

  useEffect(() => {
    getAllCourseData();
  }, [])
  return (
    <div className="App">
      <CourseContext.Provider value={courses}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Courses />} />
            <Route path='/:courseId/:chapterId' element={<ChapterDetails />} />
          </Routes>
        </Router>
      </CourseContext.Provider>
    </div>
  );
}

export default App;
