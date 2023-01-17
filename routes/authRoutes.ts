import express  from "express";

const app = express();


app.get('/auth', (req, resp)=>{
    console.log('Hola desde el get');

    return resp.status(200).json({
        ok: true,
        message: 'Hola desde el get'
    })
})


module.exports = app;