const mongoose = require('mongoose');

const URI = process.env.MONGODB_URL

const dbConnect = async (req,res) => {

    try {
        
        await mongoose.connect(URI)
        console.log("DataBase Connection Successfull")
    } catch (error) {
        console.log("DataBase Connection Failed" )
    }
}



module.exports = dbConnect();