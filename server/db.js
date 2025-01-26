<<<<<<< HEAD
const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb://127.0.0.1:27017/chat"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

=======
const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb://127.0.0.1:27017/chat"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

>>>>>>> c372f4b5802252bf8c0e83b9e9f9893c47327896
module.exports = Connection