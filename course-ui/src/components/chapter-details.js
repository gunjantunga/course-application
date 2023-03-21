
import React, { useContext, useEffect } from 'react';
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

function ChapterDetails({ getAllCourseData, getAllChapter }) {

    const { courseId, chapterId } = useParams();
    const { chapters } = useContext(CourseContext);

    let chapter = chapters && chapters.find((item) => {
        return item._id === chapterId
    });

    if (chapters.length) {
        let localChapters = JSON.parse(localStorage.getItem('chapters'));
        let index = localChapters && localChapters.findIndex((item) => item._id === (chapter && chapter._id));
        if (index >= 0) {
            localChapters && localChapters.splice(index, 1, { ...localChapters[index], view: true })
            localStorage.setItem('chapters', JSON.stringify(localChapters))
        }
    }

    useEffect(() => {
        getAllCourseData();
        getAllChapter(courseId);

    }, [])

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