import express  from "express";
import mysql from 'mysql2/promise' 
// import { connectDB } from '../server/index'

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



app.get('/auth', (req, resp)=>{
    console.log('Hola desde el get');

    return resp.status(200).json({
        ok: true,
        message: 'Hola desde el get'
    })
})


module.exports = app;