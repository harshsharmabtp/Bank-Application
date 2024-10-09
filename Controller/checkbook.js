const Check = require("../model/checkbook")


const chekb = async(req,res) => {


    const {full_name,email,phone_number,mailing_address,bank_name,account_number,checkbook_type,quantity} = req.body;

    const newForm = new Check({
        full_name,email,phone_number,mailing_address,bank_name,account_number,checkbook_type,quantity,
    });


    try {
        await newForm.save()
        res.json({message:"Data Has been Saved in the backend"})
    } catch (error) {
        res.json({message:"Error in processing your data",error,error:message})
    }
}


module.exports = {
    chekb,
};