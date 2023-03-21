import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material';
import { CourseContext } from '../App';
const Tabs = styled(NavLink)(`
    font-size:20px;
    margin:20px;
    text-decoration:none;
    color:inherit;
`)


const Sidebar = ({ children }) => {

    const { courseId } = useParams();
    const { chapters } = useContext(CourseContext);

    return (
        <div className="container">
            <div className="sidebar">
                <div style={{
                    marginTop: 20,
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: 'bold',
                    borderBottom: '2px solid white',
                    width: 120
                }}>
                    Chapter List
                </div>
                {
                    chapters && chapters.map((item, index) => (
                        <Tabs
                            to={`/${courseId}/${item._id}`}
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