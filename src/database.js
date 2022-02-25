import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ups:ups2022@cluster0.20gda.mongodb.net/Products?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useFindAndModify: true,*/
    dbName: 'Products'
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
