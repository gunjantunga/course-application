import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom';
import { LinearProgressWithLabel } from './progressbar';
import Box from '@mui/material/Box';

export default function CourseCard({ item = {} }) {

    const navigate = useNavigate();

    let localChapter = JSON.parse(localStorage.getItem('chapters'));
    let viewedChapter = localChapter && localChapter.filter((item) => item.view);
    
    return (
        <Card sx={{
            maxWidth: 365,
            height: 450,
            margin: 10,
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 7px #a2b0bd",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <div>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.name === "Redux Toolkit" ? "https://redux-toolkit.js.org/img/redux.svg" : logo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography style={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                </CardContent>
            </div>
            <div>
                <CardActions>
                    <Box sx={{ width: '100%' }}>
                        {(viewedChapter && viewedChapter.length && viewedChapter[0].courseId) === item._id ? <LinearProgressWithLabel value={(viewedChapter.length / localChapter.length) * 100} /> : <LinearProgressWithLabel value={0 * 100} />}
                    </Box>
                </CardActions>
                <CardActions>
                    <Button size="medium" onClick={() => navigate(`/${item._id}`)}>Learn More</Button>
                </CardActions>
            </div>
        </Card>
    );
}