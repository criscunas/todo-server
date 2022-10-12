import express from 'express';
import cors from 'cors'
import router from './router/index.js';
const app = express();

const SERVER_PORT = 5000;

app.use(express.json());
app.use(cors())
app.use(router)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at port ${SERVER_PORT}`)
})