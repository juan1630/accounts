import express from 'express';
import  mysql from 'mysql2/promise'
import { authValidation } from '../middlewares/auth';
let connect:any;

mysql.createConnection({
    host:'localhost',
    database: 'accounts',
    user:"root",
    password:"Eltodasmias-16"
})
.then( data => connect = data )
.catch( error => console.log(error) );

const app = express();

app.post('/new/operation', authValidation ,async(req, resp)=> {
    
    try {
        const {  fechaDeOperacion, total, kindOfMove, userId = 1 } = req.body;
        const [ rows]  = await connect.execute(`INSERT INTO OPERACIONES ( fechaDeOperacion,  total, kindOfMove, userId) VALUES ( ${fechaDeOperacion}, ${total}, ${kindOfMove}, ${userId} )`);
        if( rows.affectedRows  == 1) {
            const [ row ] = await connect.execute(`SELECT * FROM operaciones WHERE idOperacion = ${rows.insertId}`)
        
            return resp.status(201).json({
                ok: true,
                message: 'Created',
                data: row
            })
        }
    }catch (error ) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            message: 'Hubo un error',
            error
        })
    }
});


module.exports = app;
