const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurant/:restaurantID/photos', (req, res) => {
  const restaurantID = parseInt(req.params, 10);
  if (typeof restaurantID !== 'number') {
    res.status(400).send('Bad input, must be a valid ID number.');
  } else {
    res.status(200).send('OK');
  }
});

const port = process.env.PORT || 3004;
app.listen(port, console.log(`Listening on ${port}`));
