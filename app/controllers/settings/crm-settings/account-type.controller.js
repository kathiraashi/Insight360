var CRM_settings_model = require('../../../models/settings/crm-settings.model.js');
var Admin_model = require('../../../models/Admin.model.js');
var ErrorManagement = require('./../../../config/ErrorHandling.js');
var CryptoJS = require("crypto-js");
var objectAssign = require('object-assign');

exports.AccountTypeCreate = function(req, res) {
    var CryptoBytes  = CryptoJS.AES.decrypt(req.body.info, 'SecretKeyIn@123');
    var ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));

    if(!ResivingData.Company_Id && ResivingData.Company_Id !== '' ) {
        res.status(200).send({Status:"False", Message: "Company Info can not be empty" });
    } else if (!ResivingData.Branch_Id && ResivingData.Branch_Id !== ''  ) {
        res.status(200).send({Status:"False", Message: "Branch Info can not be empty" });
    } else if (!ResivingData.User_Id && ResivingData.User_Id !== ''  ) {
        res.status(200).send({Status:"False", Message: "User Info can not be empty" });
    } else if(!ResivingData.Account_Type && ResivingData.Account_Type !== '' ) {
        res.status(200).send({Status:"False", Message: "Account Type can not be empty" });
    } else {
        var varAccountType = new CRM_settings_model.AccountType({
            Company_Id: ResivingData.Company_Id, 
            Branch_Id: ResivingData.Branch_Id,
            User_Id: ResivingData.User_Id,
            Account_Type: ResivingData.Account_Type,
            Active_Status: 'Active'
        });

        varAccountType.save(function(err, result) {
            if(err) {
                res.status(500).send({Status:"False", Error: err, Message: "Some error occurred while creating the Account Type!."});
            } else {
                const Info = CryptoJS.AES.encrypt(JSON.stringify(result), 'SecretKeyOut@123');
               res.status(200).send({Status:"True", Responce: Info.toString() } );
            }
        });
    }
};

exports.AccountTypeList = function(req, res) {
        CRM_settings_model.AccountType.find({'Active_Status': 'Active'}, {}, {sort: { updatedAt: -1 }}, function(err, result){
            if(err) {
                res.status(500).send({Status:"False", Error: err, Message: "Some error occurred while retrieving Account Type!."});
            } else {
    
                const UserData = (data) =>
                    Promise.all( data.map(info => UserInfo(info))).then(
                        ReturnData => {
                            const Info = CryptoJS.AES.encrypt(JSON.stringify(ReturnData), 'SecretKeyOut@123');
                            res.status(200).send({Status:"True", Responce:  Info.toString() } );
                        }).catch( err =>  {
                                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Account Type List Output catch Error ', 'account-type.controller.js - 51', err);
                                res.send({ Status: "False", Error: err, Message: "Some error occurred while Fetching Account Type!." });   
                            }
                        );

                const UserInfo = info =>
                    Promise.all([
                        Admin_model.Users.findOne({ '_id': info.User_Id }, 'User_Name User_Email updatedAt createdAt' ).exec(),
                    ]).then(data => {
                        let DataInfo = JSON.parse(JSON.stringify(info));
                        let UserInfo = JSON.stringify(data[0]).split('"updatedAt":').join('"User_updatedAt":');
                        let UserInfo_1 = JSON.parse(UserInfo.split('"createdAt":').join('"User_createdAt":'));
                        var OutputData = objectAssign(UserInfo_1, DataInfo);
                        return OutputData;
                    }).catch( err => { 
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Account Type List Fetch UserInfo catch Error ', 'account-type.controller.js - 66', err);
                    });
                
                UserData(result);
            }
        });
};

exports.AccountTypeUpdate = function(req, res) {
        var CryptoBytes  = CryptoJS.AES.decrypt(req.body.info, 'SecretKeyIn@123');
        var ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));

        if(!ResivingData._Id && ResivingData._Id !== '' ) {
            res.status(200).send({Status:"False", Message: "Data Id can not be empty" });
        } else if (!ResivingData.Branch_Id && ResivingData.Branch_Id !== ''  ) {
            res.status(200).send({Status:"False", Message: "Branch Info can not be empty" });
        } else if (!ResivingData.User_Id && ResivingData.User_Id !== ''  ) {
            res.status(200).send({Status:"False", Message: "User Info can not be empty" });
        } else if(!ResivingData.Account_Type && ResivingData.Account_Type !== '' ) {
            res.status(200).send({Status:"False", Message: "Account Type can not be empty" });
        } else {
            CRM_settings_model.AccountType.findById(ResivingData._Id, function(err, result) {
                if(err) {
                    res.status(500).send({ Status:"False", Error: err, Message: "Some error occurred while find Account Type!."} );
                } else {
                    result.Branch_Id = ResivingData.Branch_Id;
                    result.User_Id = ResivingData.User_Id;
                    result.Account_Type = ResivingData.Account_Type;

                    result.save(function(updateErr, updateResult){
                        if(updateErr) {
                            res.status(500).send({ Status:"False", Error: updateErr, Message: "Some error occurred while Update Account Type!."} );
                        } else {
                            const Info = CryptoJS.AES.encrypt(JSON.stringify(updateResult), 'SecretKeyOut@123');
                            res.send({Status:"True", Responce: Info.toString() });
                        }
                    });
                }
            });
        }
};


exports.AccountTypeDelete = function(req, res) {
    var CryptoBytes  = CryptoJS.AES.decrypt(req.body.info, 'SecretKeyIn@123');
    var ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));

    if(!ResivingData._Id && ResivingData._Id !== '' ) {
        res.status(200).send({Status:"False", Message: "Data Id can not be empty" });
    } else if (!ResivingData.Branch_Id && ResivingData.Branch_Id !== ''  ) {
        res.status(200).send({Status:"False", Message: "Branch Info can not be empty" });
    } else if (!ResivingData.User_Id && ResivingData.User_Id !== ''  ) {
        res.status(200).send({Status:"False", Message: "User Info can not be empty" });
    } else {
        CRM_settings_model.AccountType.findById(ResivingData._Id, function(err, result) {
            if(err) {
                res.status(500).send({ Status:"False", Error: err, Message: "Some error occurred while find Account Type!."} );
            } else {
                result.Active_Status = 'Inactive';
                result.save(function(updateErr, updateResult){
                    if(updateErr) {
                        res.status(500).send({ Status:"False", Error: updateErr, Message: "Some error occurred while Update Account Type!."} );
                    } else {
                        const Info = CryptoJS.AES.encrypt(JSON.stringify(updateResult), 'SecretKeyOut@123');
                        res.send({Status:"True", Responce: Info.toString() });
                    }
                });
            }
        });
    }
};

// exports.delete = function(req, res) {
//         CRM_settings_model.AccountType.remove({_id: req.params.Id}, function(err, data) {
//             if(err) {
//                 res.status(500).send({status:"False", message: "Could not delete Account Type with id " + req.params.Id});
//             } else {
//                 res.send({status:"True", message: "Account Type Deleted successfully!"})
//             }
//         });
// };