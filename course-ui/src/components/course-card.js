import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom';


export default function CourseCard({ item = {} }) {

    const navigate = useNavigate();

    return (
        <Card sx={{
            maxWidth: 345,
            height: 400,
            margin: 10,
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 7px #a2b0bd"
        }}>
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
            <CardActions>
                <Button size="medium" onClick={() => navigate(`/${item._id}/${item.chapter[0]._id}`)}>Learn More</Button>
            </CardActions>
        </Card>
    );
}