import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postsRoutes from './routes/postsRoutes.js';
import './config/dbConfig.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/posts", postsRoutes);

app.listen(5000, () => console.log(`Server running on port: http://localhost:${PORT}`));
