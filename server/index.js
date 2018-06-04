const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurant/:restaurantID/photos', (req, res) => {
  const restaurantID = parseInt(req.params.restaurantID, 10);

  if (typeof restaurantID !== 'number') {
    res.status(400).send('Bad input, must be a valid ID number.');
  } else {
    db.getPhotos(restaurantID, (err, data) => {
      if (err) {
        res.status(500).send('Error: could not retrieve data from db.');
      } else {
        res.status(200).send(data);
      }
    });
  }
});

const port = process.env.PORT || 3004;
app.listen(port, console.log(`Listening on ${port}`));
