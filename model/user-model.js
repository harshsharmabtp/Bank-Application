const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")


const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
})

UserSchema.methods.generateToken = async function() {

    try {
        
        //Header = Type
        //Payload = Secreat Key
        //Signature = Expiry Time

        return jwt.sign({

            email : this.email,
            password : this.password,
            name:this.name,

        },
        
        process.env.SECRET_KEY,
        {
            expiresIn : "30d"
        }
    )


    } catch (error) {
        console.log("Token Error Found !")
        console.error(error)
    }
}

// Creating the Model


const User = new mongoose.model("User",UserSchema)




module.exports = User