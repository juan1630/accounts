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

