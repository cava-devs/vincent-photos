const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cava_table',
});

connection.connect();

const getPhotos = (restaurantID, dataSend) => {
  connection.query(`SELECT id, url FROM cavatable_photos WHERE restaurant_id = ${restaurantID}`, (err, results) => {
    if (err) {
      dataSend(err, null);
    } else {
      dataSend(null, results);
    }
  });
};

module.exports = {
  connection,
  getPhotos,
};
