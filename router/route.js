const express = require('express');
const router = express.Router();
const ctrl = require("../controller/control");
const interestRateCtrl = require("../controller/interestrate");
const { submitForm } = require("../controller/fastagpayment");
const { chekb } = require("../controller/checkbook")    


router.route("/register").post(ctrl.register);
router.route("/login").post(ctrl.login);


router.get('/api/interestrates', interestRateCtrl.getUserData);

router.post('/api-auth/FastTag',submitForm);
router.post('/api-auth/CheckBook',chekb)
module.exports = router;
