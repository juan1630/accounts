const bodyParser = require('body-parser');
import express from 'express';
// import mysql from 'mysql2/promise';


export default  class Server {
    
    
    private app = express();

    constructor() {
    }

    initServer () {
        this.app.use( express.json( ));
        this.app.use( express.urlencoded( { extended: true}));
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            next();
        });
        this.app.use(require('../routes/index'));
        this.app.listen(3001, ()=> console.log('Server is running on port 3000'));
    }
}

// export const connectDB = () => {
    
//     var pool:any;

//     mysql.createConnection({
//         host:"localhost",
//         database:"accounts",
//         user:"root",
//         password:"Eltodasmias-16"
//     })
//     .then( data => pool = data)
//     .catch(error => console.log(error));
// }