const mongoose = require('mongoose')

const url = "mongodb+srv://Aritra:mongopass@cluster0.creprse.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully')
    }).catch((error) => console.log("Error: ", error))
}