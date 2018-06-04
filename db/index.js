const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cava_table',
});

connection.connect();

const getPhotos = (restaurantID, callback) => {
  connection.query(`SELECT url FROM cavatable_photos WHERE restaurant_id = ${restaurantID}`, (err, results) => {
    if (err) {
      console.log(restaurantID);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getPhotos,
};
