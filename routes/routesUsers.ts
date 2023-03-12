import express, { request, response } from 'express';
import mysql from 'mysql2/promise';
import bycryptjs from 'bcryptjs';
let connect:any;

mysql.createConnection({
   host:'localhost',
   database: 'accounts',
   user:"root",
   password:"Eltodasmias-16"
 })
.then( data => connect= data )
.catch( error => console.log(error) );

const app = express();

app.post('/auth/create/user',async (req , resp ) => {


    console.log(  req.body, "/auth/create/user");
    const {  name, age , prosession, password, email, theme  } = req.body;
    const passwordEncrypt = bycryptjs.hashSync( password );

    try {
        const [rows] = await connect.execute(`INSERT INTO USERS(name, age, prosession, password, email, theme) VALUES( '${name }', ${ age }, '${prosession}', '${ passwordEncrypt }', '${email}', '${theme}' );`); 
    // INSERT INTO USERS( name, age, prosession, password, email, theme ) VALUES ( 'JUAN', 27, 'SOFTWARE ENGENEER', '123456' ,'JOSEJUANPATRON1630@GMAIL.COM', 'WHITE'  );
    
    if(  rows.affectedRows == 1 ) {

        const [ rows1 ] = await connect.execute(`SELECT  name, prosession, age, email, theme   FROM USERS WHERE id =  ${rows.insertId} `)

          
        return resp.status(201).json({
            ok: true,
            message: 'User created',
            resp: rows1[0]
        });
    }
    }catch(error) {
        console.log(error);
    }


});


app.get('/list/users', async (req, resp ) => {

    try {
      const [ rows ] = await connect.execute( 'select * from users');
        if(rows) {

            return resp.status(200).json({
                ok: true,
                message:"Se encontraron los usuarios",
                users: rows
            })
        }
    }catch (error) {
        console.log(error);
    }

});

module.exports = app;