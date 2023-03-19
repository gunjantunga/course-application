import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getAllChapterByCourseId } from '../services';
const Tabs = styled(NavLink)(`
    font-size:20px;
    margin:20px;
    text-decoration:none;
    color:inherit;
`)


const Sidebar = ({ children }) => {

    const [chapters, setChapters] = useState([]);

    const params = useParams();

    const getAllChapter = async () => {
        let { data } = await getAllChapterByCourseId(params.courseId)
        setChapters(data)
    }

    useEffect(() => {
        getAllChapter();
    }, [])

    return (
        <div className="container">
            <div className="sidebar">
                {
                    chapters && chapters.map((item, index) => (
                        <Tabs
                            to={`/${params.courseId}/${item._id}`}
                            key={index}
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : 'gray',
                                borderBottom: isActive ? '2px solid #fff' : ''
                            })}
                        >
                            <div className="link_text">{item.name}</div>
                        </Tabs>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;