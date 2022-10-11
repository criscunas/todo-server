const express = require('express');
const app = express();
const SERVER_PORT = 3000 || process.env.PORT;

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at port ${SERVER_PORT}`)
})