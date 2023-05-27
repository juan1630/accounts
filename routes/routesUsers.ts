import express from 'express';
import mysql from 'mysql2/promise';
import bycryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { typesEnv } from '../environment';

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
    const saltGenereted = await bycryptjs.genSalt(10);
    const passwordEncrypt = bycryptjs.hashSync( password, saltGenereted );

    try {
        const [rows] = await connect.execute(`INSERT INTO USERS(name, age, prosession, password, email, theme) VALUES( '${name }', ${ age }, '${prosession}', '${ passwordEncrypt }', '${email}', '${theme}' );`); 
    
    if(  rows.affectedRows == 1 ) {

        const [ rows1 ] = await connect.execute(`SELECT  name, prosession, age, email, theme   FROM USERS WHERE id =  ${rows.insertId} `);

        const  tokenGenereted = jwt.sign({
            _id: rows1[0].ID,
            email: rows1[0].email,
            name: rows1[0].name
        }, typesEnv.token_dev || '', { expiresIn: '8h' })
          
        return resp.status(201).json({
            ok: true,
            message: 'User was created',
            resp: rows1[0],
            token: tokenGenereted
        });
    }
    }catch(error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            message: 'Hubo un error'
        })
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