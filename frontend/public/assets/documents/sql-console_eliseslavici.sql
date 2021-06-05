CREATE DATABASE data;
use data;
CREATE TABLE song(
    songId INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    songTitle VARCHAR(100),
    artistName VARCHAR(100),
    albumName VARCHAR(100),
    releaseDate DATE,
    rating int(10),
    songComment varchar(1000),
    remarkPositive VARCHAR(200),
    remarkNegative VARCHAR(200),
    dateCreated datetime
    );

ALTER TABLE song
ADD COLUMN author VARCHAR(50) FIRST;
ALTER TABLE song CHANGE author genre VARCHAR(50);