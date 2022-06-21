DROP DATABASE IF EXISTS termin;
CREATE DATABASE termin
CHARACTER SET utf8
COLLATE utf8_general_ci;
USE termin;

CREATE TABLE anfrage
(
	anfrage_id INTEGER NOT NULL AUTO_INCREMENT,
	vorname VARCHAR(20) NOT NULL,
	nachname VARCHAR(20) NOT NULL,
	firma VARCHAR(40) NOT NULL,
	telefon VARCHAR(20) NOT NULL,
	datum DATE NOT NULL,
	PRIMARY KEY (anfrage_id)
);