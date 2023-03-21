import React, { useEffect } from 'react';
import CourseCard from './course-card';
import { FormGroup, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import { CourseContext } from '../App';

const Container = styled(FormGroup)(`
    border-radius:10px;
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px
    },
`)

const Courses = ({ getAllCourseData }) => {

    const { courses } = useContext(CourseContext);
    useEffect(() => {
        getAllCourseData()
    }, []);

    return (
        <Container style={{ justifyContent: 'center' }}>
            <Typography variant='h3'>My Courses</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {courses && courses.map((item, index) => {
                    return <CourseCard key={index} item={item} style={{ margin: 20 }} />
                })}
            </div>
        </Container>
    )
}
export default Courses;