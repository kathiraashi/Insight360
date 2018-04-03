module.exports = function(app) {

    var UserController = require('../controllers/Admin.controller.js');
        app.post('/API/Admin/UserValidate', UserController.User_Validate);

};
