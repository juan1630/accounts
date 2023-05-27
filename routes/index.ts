import express from 'express';


const app = express();

app.use(require('./authRoutes'));
app.use(require('./routesUsers'));
app.use(require('./registerAmounts'));
app.use(require('./movesRoutes'));

module.exports = app;