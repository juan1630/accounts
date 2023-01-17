import express from 'express';


const app = express();

app.use(require('./authRoutes'));

module.exports = app;