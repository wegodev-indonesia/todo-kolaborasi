import express from 'express';
import dotenv from 'dotenv'
import { connection } from './connection.js';
import cors from 'cors';
import indexRouter from './routes/index.js';

const env = dotenv.config().parsed;

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: env.CORS_URL,
}));

app.use('/', indexRouter);
connection();

app.listen(env.APP_PORT, () => {
    console.log(`Server is running on port ${env.APP_PORT}`);
})
