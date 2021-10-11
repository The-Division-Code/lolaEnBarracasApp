const express = require('express');
// const bodyParser = require ('body-parser');

const App = express();

const cors = require('cors');
const apiController = require('./routers/api')
const administrarController = require('./routers/administrar')
App.use(cors());

App.use(express.json())
App.use(express.urlencoded({extended: true})) //Si va a haber formularios en este servidor tiene que ir true
App.use(express.static(__dirname + '/public'));
App.use('/',apiController)
App.use('/administrar', administrarController)

module.exports = App