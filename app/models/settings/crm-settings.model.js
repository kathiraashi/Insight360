var mongoose = require('mongoose');

var AccountTypeSchema = mongoose.Schema({
    Company_Id: { type : String , required : true },
    Branch_Id:{ type : String , required : true },
    User_Id: { type : String , required : true },
    Account_Type:{ type : String , required : true },
    Active_Status:{ type : String , required : true },
    }, 
    { timestamps: true }
);


var varAccountType = mongoose.model('AccountType', AccountTypeSchema, 'CRMSettingsAccountType');


module.exports = {
    AccountType : varAccountType,
};