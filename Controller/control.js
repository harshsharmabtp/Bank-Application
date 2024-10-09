const user = require("../model/user-model")
const bcrypt = require('bcrypt');
const path = require('path')



const register = async (req,res) => {

    try {
        
        console.log(req.body)
        const {email,password,name} = req.body
        const EmailExist = await user.findOne({email})

        // Checking if user is already Registerd
        if(EmailExist){
            return res.json({message:"User Already Registered"})
        }

        // Add a new User

        const saltRound = 5
        const hash_password = await bcrypt.hash(password,saltRound)
        const userCreated = await user.create({email,password:hash_password,name})

        const token = await userCreated.generateToken();
        res.json({message:"Registration Successfull",token})

    } catch (error) {
        
        res.json({message:"Internal Server Error !" , error:error.message})
    }
}

// Login Functionality

const login = async (req,res) => {

    try {
        
        console.log(req.body)
        const {email,password,name} = req.body
        const EmailExist = await user.findOne({email})

        // Checking if user is already Registerd
        if(!EmailExist){
            return res.json({message:"You are not Registered Please Register First"})
        }

        // Login Old User

        const saltRound = 5
        const hash_password = await bcrypt.hash(password,saltRound)
        const userCreated = await user.create({email,password:hash_password,name})

        const User = await bcrypt.compare(password,EmailExist.password)
        
       

        if(!User){
            return res.json({message:"Password is Incorrect"})
            
        }
        
            const token = await userCreated.generateToken();
            return res.json({message:"Login Successfull",token})
         

    } catch (error) {
        
        res.json({message:"Internal Server Error !" , error:error.message})
    }
}




module.exports = {register,login}