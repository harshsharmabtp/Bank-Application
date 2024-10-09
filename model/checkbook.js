const mongoose = require('mongoose')
const book = new mongoose.Schema({

    full_name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone_number:{
        type:String,
        require:true,
    },
    mailing_address:{
        type:String,
        require:true,
    },
    bank_name:{
        type:String,
        require:true,
    },
    account_number:{
        type:String,
        require:true,
    },
    checkbook_type:{
        type:String,
        require:true,
    },
    quantity:{
        type:String,
        require:true,
    },


})



const Check = mongoose.model("Check",book)



module.exports = Check;