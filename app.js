const express = require('express');
const formRoute = require('./routes/formRoute');
require('dotenv').config();
const app = express();
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Lead oqvest api working fine...');
}); 
app.use('/api/v1', formRoute);

module.exports = app;