import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes/index.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.blmpx9a.mongodb.net/quiz?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log(`connected successfully`);
    }).catch(err => console.log('Error while connect to database', err));

app.listen(8000, () => console.log('Server started on port 8000'));


