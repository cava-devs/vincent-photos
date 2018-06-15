const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');

const app = express();

app.use(bodyParser.json());
app.use('/photosBundle', express.static(path.join(__dirname, '../public/dist/bundle.js')));

app.get('/restaurant/:restaurantId/photos', (req, res) => {
  const restaurantId = parseInt(req.params.restaurantId, 10);

  if (typeof restaurantId !== 'number') {
    res.status(400).send('Bad input, must be a valid ID number.');
  } else {
    db.getPhotos(restaurantId, (err, data) => {
      if (err) {
        res.status(500).send('Error: could not retrieve data from db.');
      } else {
        res.status(200).send(data);
      }
    });
  }
});

module.exports = app;
