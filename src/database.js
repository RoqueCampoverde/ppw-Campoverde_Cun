import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ups:ups2022@cluster0.20gda.mongodb.net/Products?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Products'
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))


/*const db = require('mongoose')

db.Promise = global.Promise
    
async function conexion( url ) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'Products'
    })
    .then(() => console.log('[db] - Conexion Exitosa.'))
    .catch((error) => console.error('[db] - ' + error))
}
    
module.exports = conexion*/