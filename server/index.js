const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('../public'));


const port = process.env.PORT || 3004;
app.listen(port, console.log(`Listening on ${port}`));