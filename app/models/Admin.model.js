var mongoose = require('mongoose');

var CompanySchema = mongoose.Schema({
    Company_Name: { type : String , required : true },
    Address:{ type : String }
    }, 
    { timestamps: true }
);

var BranchSchema = mongoose.Schema({
    Company_Id: { type : String , required : true },
    Branch_Name: { type : String , required : true },
    Address:{ type : String }
    }, 
    { timestamps: true }
);
var UserSchema = mongoose.Schema({
    Company_Id: { type : String , required : true },
    Branch_Id: { type : String , required : true },
    User_Email: { type : String , required : true , unique: true },
    User_Password: { type : String , required : true },
    User_Name: { type : String , required : true },
    DB_Name: { type : String , required : true },
    DB_UserName: String,
    DB_Password: String,
    Address:{ type : String }
    }, 
    { timestamps: true }
);

var varCompanies = mongoose.model('Companies', CompanySchema, 'Admin_Companies');

var varBranches = mongoose.model('Branches', BranchSchema, 'Admin_Branches');

var varUsers = mongoose.model('Users', UserSchema, 'Admin_Users');


module.exports = {
    Companies : varCompanies,
    Branches : varBranches,
    Users : varUsers
};