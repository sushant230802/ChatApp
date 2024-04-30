import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();

const app = express();

app.get('/', (req, res)  => {
    res.send('Hello World');
  })

app.listen(process.env.PORT, () => {
connectToMongoDB();
console.log('Server are running on port 3000');
})
