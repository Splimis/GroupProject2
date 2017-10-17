create database quotations;

use quotations; 

CREATE TABLE `quote` (
 id INT NOT NULL AUTO_INCREMENT,
 quotation VARCHAR(50) NOT NULL,
 CharID integer(50) NOT NULL,

 PRIMARY KEY (id)

);

INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote', 1);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote2', 2);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote3', 1);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote4', 2);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote5', 1);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote6', 2);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote7', 1);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote8', 2);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote9', 1);
INSERT INTO quote (quotation, CharID) VALUES ('insert rick and morty quote10', 2);



select * from quote;

SELECT * FROM quote WHERE CharID = 2;

SELECT * FROM quote
ORDER BY RAND()
LIMIT 1;

Delete from quote;

drop table if exists quote; 