var UserModel = require('../models/Admin.model.js');
var CryptoJS = require("crypto-js");
var ErrorManagement = require('./../config/ErrorHandling.js');

exports.User_Validate = function(req, res) {
        var CryptoBytes  = CryptoJS.AES.decrypt(req.body.info, 'SecretKeyIn@123');
        var ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));

        if(!ResivingData.User_Email && ResivingData.User_Email !== '' ) {
            res.status(200).send({Status:"False", Message: "User Email can not be empty" });
        } else if (!ResivingData.User_Password && ResivingData.User_Password !== ''  ) {
            res.status(200).send({Status:"False", Message: "User Password can not be empty" });
        } else {
            UserModel.Users.findOne({'User_Email': ResivingData.User_Email.toLowerCase(), 'User_Password': ResivingData.User_Password}, "_id User_Name User_Email Company_Id Branch_Id DB_Name", function(err, result) {
                if(err) {
                    res.status(500).send({Status:"False", Message: "Some error occurred while User Validate."});
                } else {
                    if(result === null){
                        res.status(200).send({Status:"False", Message: ' User Email or Password Invalid' } );
                    }else {
                        const Info = CryptoJS.AES.encrypt(JSON.stringify(result), 'SecretKeyOut@123');
                        res.status(200).send({Status:"True", Responce: Info.toString() } );
                    }
                }
            });
        }
};
