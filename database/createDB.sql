/*
	This scripts are for create a new database in the project accoun
	DROP DATABASE ACCOUNTS;
	USE USERS;
*/




CREATE DATABASE ACCOUNTS;
USE ACCOUNTS;

CREATE TABLE USERS (
	name varchar(256),	
	age int,
	prosession varchar(100),
	password varchar(150),
	email varchar(150),
	theme varchar(50),
	ID int NOT NULL,
	PRIMARY KEY(ID),
);


SELECT * FROM USERS;



CREATE TABLE KindOfMoves (
	name varchar(100),
	IDKindOfMove int  not null,
	primary key(IDKindOfMove)
);

SELECT * FROM KindOfMoves;

CREATE TABLE MONTHS_MOVES (
	IDmove int not null,
	months varchar(100),
	moving  varchar(256),
	total int ,
	userID int not null,
	KindOfMoveid int not null,
	primary key(IDmove),
	foreign key ( userID ) references USERS,
	foreign key (userID) references KindOfMoves
);


SELECT * FROM MONTHS_MOVES;

CREATE TABLE OPERACIONES(
	idOperacion int not null,
	fechaDeOperacion varchar (100),
	monthOperacion varchar(50),
	total int not null,
	kindOfMove int not null,
	userId int not null,
	primary key (idOperacion),
	foreign key ( kindOfMove ) references KindOfMoves,
	foreign key ( userID ) references USERS,
);


SELECT * FROM OPERACIONES;

/*
	QUITAR EL NOT NULL Y PONER AUTO_INCREMENT
*/
CREATE TABLE OPERACIONES(
	idOperacion int not null,
	fechaDeOperacion varchar (100),
	monthOperacion varchar(50),
	total int not null,
	kindOfMove int not null,
	userId int not null,
	primary key (idOperacion),
	foreign key ( kindOfMove ) references KindOfMoves,
	foreign key ( userID ) references USERS,
);



INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	1,'15/01/2023', '01', 250, 1,1 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	2,'09/01/2023', '01', 20, 1,2 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	3,'02/01/2023', '01', 50, 1,3 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	4,'02/01/2023', '02', 500, 1,1 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	5,'01/01/2023', '03', 2250, 1,1 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	6,'15/01/2023', '03', 50, 1,2 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	7,'02/01/2023', '01', 20, 1,2 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	8,'05/01/2023', '01', 10, 1,1 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	9,'05/01/2023', '01', 250, 1,4 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	10,'02/01/2023', '01', 3500, 1,5 );
INSERT INTO OPERACIONES (	idOperacion, fechaDeOperacion, monthOperacion, total, kindOfMove, userId) VALUES (	11,'03/01/2023', '01', 150, 1,2 );

SELECT * FROM OPERACIONES;


/*

	JOIN DE LAS TRES TABLAS
*/

SELECT * FROM OPERACIONES INNER JOIN USERS ON OPERACIONES.userId = USERS.ID  INNER JOIN KindOfMoves ON OPERACIONES.kindOfMove = KindOfMoves.IDKindOfMove;