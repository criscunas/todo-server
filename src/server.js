import express from 'express';
import cors from 'cors'
import router from './router/index.js';
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})