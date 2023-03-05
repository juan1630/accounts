import express from 'express';


const app = express();

app.use(require('./authRoutes'));
app.use(require('./routesUsers'));

module.exports = app;