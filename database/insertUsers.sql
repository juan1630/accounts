USE ACCOUNTS;
SELECT * FROM KindOfMoves;

INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'COMIDA', 1 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'CASA', 2 );

INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'ESCUELA', 3 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'HIJOS', 4 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'DEPORTES', 5 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'VIDEOJUEGOS', 6 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'INVERSIONES', 7 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'ELECTRONICA', 8 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'SALUD', 9 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'SEGUROS', 10 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'MEDICINA', 11 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'ROPA', 12 );
INSERT INTO KindOfMoves (name, IDKindOfMove) VALUES ( 'OTROS', 13 );

SELECT * FROM KindOfMoves;



INSERT INTO USERS( name, age, prosession, password,email,theme, ID ) VALUES ( 'JUAN', 27, 'SOFTWARE ENGENEER', '123456' ,'JOSEJUANPATRON1630@GMAIL.COM', 'WHITE' , 1 );

INSERT INTO USERS( name, age, prosession, password,email,theme, ID ) VALUES ( 'JUAN cARLOS', 25, 'DESIGNER', '123456' ,'JUANCARLOS@GMAIL.COM', 'WHITE' , 2 );
INSERT INTO USERS( name, age, prosession, password,email,theme, ID ) VALUES ( 'JOSE CARLOS', 19, 'SOFTWARE ENGENEER', '123456' ,'JOSE@GMAIL.COM', 'WHITE' , 3 );

/*

	name varchar(256),	
	age int,
	prosession varchar(100),
	password varchar(150),
	email varchar(150),
	theme varchar(50),
	ID int NOT NULL,
	PRIMARY KEY(ID),

*/


SELECT * FROM USERS;