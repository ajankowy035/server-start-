require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const loggerMiddleware = require('./middlewares/logger');
const rootController = require('./controllers');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(loggerMiddleware);

app.get('/', rootController)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

module.exports = app;