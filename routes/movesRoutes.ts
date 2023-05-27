import  express, {Request, Response}  from 'express';
import  mysql from 'mysql2/promise'
 let conecct: any;


 mysql.createConnection({
    host:'localhost',
    database: 'accounts',
    user:"root",
    password:"Eltodasmias-16"
 })
 .then((data) => conecct = data)
 .catch(error => {
    console.log(error);
 }) 

const app = express();


app.get('/list/moves', async (req: Request, resp: Response) => {

   const [rows] =  await conecct.execute('SELECT * FROM KindOfMoves ORDER BY name');
    if( !rows ) {
        return resp.status(404).json({
            ok:false,
            message: 'Not found it'
        })
    }

    return resp.status(200).json({
        ok: true,
        message: 'Moves found',
        moves: rows
    })

})


module.exports =  app
