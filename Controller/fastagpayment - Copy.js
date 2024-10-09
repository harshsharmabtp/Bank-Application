const Fastpays = require('../model/fastagpayment');
const submitForm = async(req,res)=>{
    const{ email,vehicleClass,date,regNumber,rfidNumber,cardNumber,merchantName,amount} = req.body;


    const newForm = new Fastpays({
        email,
        vehicleClass,
        date,
        regNumber,
        rfidNumber,
        cardNumber,
        merchantName,
        amount,
    });

    try {
        await newForm.save();
        res.json({message:"'Data saved successfully!"})
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }

};
module.exports = {
    submitForm,
};