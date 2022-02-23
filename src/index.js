import app from './app'
import './database'

app.listen(3000);

console.log('ServerListen on port', 3000)

/*const express = require('express')
const bodyParser = require('body-parser')

const  config = require('./config')
const routes = require ('./routes/products.routes')

var app = express()

const db = require('./database')
db( config.DB_URL )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

app.use(config.CLIENT_URL, express.static( config.CLIENT_DIR ))
app.listen( config.PORT )
console.log( `La aplicacion esta escuchando en el http://localhost:${config.PORT}` )*/