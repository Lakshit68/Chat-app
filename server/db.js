require('dotenv').config()
const mongoose = require('mongoose')

function Connection() {
    const mongoURI = process.env.DB
    mongoose.connect(mongoURI)
    .then(() => console.log("mongoDB connected"))
    .catch(err => console.log(err))
}

module.exports = Connection