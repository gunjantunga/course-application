import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', Routes);

const url = "mongodb+srv://gunjankumartunga12:gunjan123@cluster0.blmpx9a.mongodb.net/quiz?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log(`connected successfully`);
    }).catch(err => console.log('Error while connect to database', err));

app.listen(8000, () => console.log('Server started on port 8000'));


