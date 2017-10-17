create database quotations;

use quotations; 

CREATE TABLE `quote` (
 id INT NOT NULL AUTO_INCREMENT,
 quotation VARCHAR(50) NOT NULL,
 CharID integer(50) NOT NULL,

 PRIMARY KEY (id)

);

select * from quote;

SELECT * FROM quote WHERE CharID = 2;

SELECT * FROM quote
ORDER BY RAND()
LIMIT 1;

Delete from quote;

drop table if exists quote; 