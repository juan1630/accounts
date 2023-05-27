import mysql from 'mysql2/promise';

export const connecToDB = async() => {

    const connected = await  mysql.createConnection({
        host:'localhost',
        database: 'accounts',
        user:"root",
        password:"Eltodasmias-16"
    });


    return connected;

}