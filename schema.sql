-- mysql -u root < schema.sql
-- DROP DATABASE IF EXISTS cavatable_photos;

CREATE DATABASE cavatable;

USE cavatable;

CREATE TABLE cavatable_photos (
  id int(100) NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  description varchar(255),
  date date,
  source varchar(255),
  restaurant_id int,
  PRIMARY KEY(id)
)

-- INSERT INTO cavatable_photos(url, description, date, source, restaurant_id) VALUES ('www.vincent.com', 'This is a photo', '2018-05-31', 'By Vincent Castelli', 1001);