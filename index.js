  require("dotenv").config();
  const express = require('express');
  const app = express();
  const router = require("./router/route");
  const dbConnect = require("./utils/db");
  const axios = require('axios');
 const {StudentLoan} = require("./controller/StudentLoan")
 const {getUserData} = require("./controller/interestrate")
 const {get_data} = require("./controller/fastag")
const cors = require('cors');
const { submitForm } = require("./controller/fastagpayment");
const {chekb} = require("./controller/checkbook");
const uniqid = require("uniqid")
const sha256 = require("sha256")





  app.use(cors())
  app.use(express.json());
  app.use("/api-auth", router);






  app.post('/api-auth/StudentLoan', StudentLoan);
  app.post('/api-auth/FastTag',submitForm)
  app.post('/api-auth/CheckBook',chekb)




  

  // Serve static files from the ./public directory (this should contain home.html)
  app.use(express.static('public'));

  // Redirect to the home page when accessing the ro ot URL ("/")
  app.get("/", (req, res) => {
      res.sendFile(__dirname + '/public/home.html'); // Use sendFile to send home.html
  });

  app.get("/public", (req, res) => {
      res.send("Welcome to our Browser");
  });





  app.post('/api/student', async (req, res) => {    
      try {
          const { fullName, email, loanAmount,courseOfStudy,institutionName,location } = req.body;
          const student = new LoanApplication({ fullName, email, loanAmount,courseOfStudy,institutionName,location });
          
          await student.save();
          res.status(201).json({ message: "User data saved successfully!" });
      } catch (error) {
          console.error("Error saving user data:", error);
          res.status(500).json({ message: "Error saving user data", error: error.message });
      }
  });


    app.post('/api-auth/FastTag', async (req, res) => {    
      try {
          const { email, vehicle_class,rfid_tag,reg_number,card_number,merchent_name,amount } = req.body;
          const fasting = new Fastpays({ email, vehicle_class,rfid_tag,reg_number,card_number,merchent_name,amount });
         
          await fasting.save();
          res.status(201).json({ message: "User data saved successfully!" });
      } catch (error) {
          console.error("Error saving user data:", error);
          res.status(500).json({ message: "Error saving user data", error: error.message });
      }
  });


  app.post('/api-auth/CheckBook', async (req, res) => {    
    try {
        const { full_name,email,phone_number,mailing_address,bank_name,account_number,checkbook_type,quantity } = req.body;
        const saver = new Fastpays({ full_name,email,phone_number,mailing_address,bank_name,account_number,checkbook_type,quantity });
       
        await saver.save();
        res.status(201).json({ message: "User data saved successfully!" });
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).json({ message: "Error saving user data", error: error.message });
    }
});






 app.get('/api/interestrates',getUserData)
 app.get('/api/fastag',get_data)
 





  const PORT = 14000;

  dbConnect.then(() => {
      app.listen(PORT, () => {
          console.log(`Server Running at ${PORT}`);
      });
  });






























