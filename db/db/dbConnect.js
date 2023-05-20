//mongoose package

//external imports

const mongoose = require('mongoose');
require('dotenv').config()

async function dbConnect() {

    //user mongoose to connect this app to our database on mongo db using DB_URL

    mongoose.connect(process.env.DB_URL, {
        //these options ensures that the connection is done properly

        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Successfully connected to MongoDb Atlas')
    }).catch((error) => {
        console.log('Unable to connect to MongoDB')
        console.error(error)
    })

}

module.exports = dbConnect;

