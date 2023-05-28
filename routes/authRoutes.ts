import express  from "express";
import mysql from 'mysql2/promise' 
import bycryptjs from 'bcryptjs';
import { typesEnv } from "../environment";
import jwt from 'jsonwebtoken';

const app = express();

var pool:any;

// connection to DB

mysql.createConnection({
    host:"localhost",
    database:"accounts",
    user:"root",
    password:"Eltodasmias-16"
})
.then( data => pool = data)
.catch(error => console.log(error));

app.get('/users', async  (req, resp) => {

   const [ rows ] = await pool.execute('SELECT * FROM USERS ORDER BY age DESC');

    return resp.status(200).json({
        ok: true,
        message: 'Users',
        data: rows
    })
});



app.post('/auth', async(req, resp)=>{

    console.log( req.body, '/auth' );
    const { password } = req.body;


    try {

        const [ rows ] = await pool.execute('SELECT * FROM USERS WHERE email = "'+ req.body.email +'"'  + "LIMIT 1");
        console.log( rows );
        if(rows.length != 0 ) {
            const passwordHashed = await bycryptjs.compare( password, rows[0].password )
    
            if( passwordHashed  ){
        
                const jwtSing = jwt.sign({
                    _id: rows[0].ID,
                    name: rows[0].name,
                    email: rows[0].email
                }, typesEnv.token_dev || '', { expiresIn:'8h' });   
        
        
                return resp.status(200).json({
                    ok: true,
                    message: 'Authenticated',
                    token: jwtSing
                })
                
            }
        }
    
        return resp.status(400).json({
            ok:false,
            message: 'No se encontró el usuario'
        })

    }catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            message: 'Hubo un error',
            error
        })
    }

})


module.exports = app;