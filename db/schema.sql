-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR (100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  burger_date VARCHAR (50)
)

INSERT INTO burgers (burger_name)
VALUES ("DOUBLE DECKER MELTY POUND");

INSERT INTO burgers (burger_name)
VALUES ("CRABBY PADDIE");

INSERT INTO burgers (burger_name)
VALUES ("PLAIN MUSH VEG");
