module.exports = function(app) {

    var AccountTypeController = require('../../controllers/settings/crm-settings/account-type.controller.js');
        app.post('/API/Settings/CRMSettings/AccountTypeCreate', AccountTypeController.AccountTypeCreate);
        app.post('/API/Settings/CRMSettings/AccountTypeList', AccountTypeController.AccountTypeList);
        app.post('/API/Settings/CRMSettings/AccountTypeUpdate', AccountTypeController.AccountTypeUpdate);
        app.post('/API/Settings/CRMSettings/AccountTypeDelete', AccountTypeController.AccountTypeDelete);

};
