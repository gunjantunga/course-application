
import React, { useContext } from 'react';
import { FormGroup, styled, Typography } from '@mui/material';
import Sidebar from './sidebar';
import { CourseContext } from '../App';
import { useParams } from 'react-router-dom';

const Container = styled(FormGroup)(`
    margin:2% auto 0 auto;
    & > div {
        margin-top:20px
    }
`)

function ChapterDetails() {

    const { courseId, chapterId } = useParams();
    const courses = useContext(CourseContext);

    let course = courses.find((item) => item._id === courseId);
    let chapter = course && course.chapter.find((item) => {
        return item._id === parseInt(chapterId)
    });

    console.log(chapter)

    return (

        <>
            <Container>
                <Sidebar >
                    <Typography variant='h4'>{chapter && chapter.name}</Typography>
                    <div style={{ margin: 30 }}>

                        <Typography style={{ textAlign: 'left' }}>{chapter && chapter.description}</Typography>
                    </div>
                </Sidebar>
            </Container>
        </>

    )
}

export default ChapterDetails;