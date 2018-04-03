var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var CryptoJS = require("crypto-js");
var log4js = require('log4js');
var get_ip = require('ipware')().get_ip;
var parser = require('ua-parser-js');

var ErrorManagement = require('./app/config/ErrorHandling.js');

var port = process.env.PORT || 3000;
var app = express();


// Process On Every Error
    process.on('unhandledRejection', (reason, promise) => {
        ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', reason);
        console.error("'Un Handled Rejection' Error Log File - " + new Date().toLocaleDateString());
    });
    process.on('uncaughtException', function (err) {
        console.log(err);
        ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', err.toString());
        console.error(" 'Un Caught Exception' Error Log File - " + new Date().toLocaleDateString());
    });


// DB Connection
    mongoose.connect('mongodb://localhost/Insight360');
    mongoose.connection.on('error', function(err) {
        ErrorManagement.ErrorHandling.ErrorLogCreation('', 'Mongodb Connection Error', 'Server.js - 31', err);
    });
    mongoose.connection.once('open', function() {

    });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    // Crypto Every request Decryption
    if (req.body.info !== '' && req.body.info){
        var bytes  = CryptoJS.AES.decrypt(req.body.info, 'SecretKeyIn@123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        // Log Creation For Every Request
            var fileName = new Date().toLocaleDateString();
            log4js.configure({  appenders: { Info: { type: 'file', filename: 'Logs/' + fileName + '.log'  } },
                                categories: { default: { appenders: ['Info'], level: 'info' } } });
            var logger = log4js.getLogger('Info');
            var getIp = get_ip(req);
                getIp = getIp.clientIp;
                getIp = getIp.split(':');
            var Ip = getIp[getIp.length - 1];
            var DeviceInfo = parser(req.headers['user-agent']);
                logger.info(JSON.stringify({
                    Ip: Ip,
                    Request_From_Origin: req.headers.origin,
                    Request_From: req.headers.referer,
                    Request_Url: req.url,
                    Request_Body: decryptedData,
                    If_Get : req.params,
                    Device_Info: DeviceInfo,
                }));
            return next();
    }else {
        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Security Error', 'Server.js - 69');
        return res.status(403).end('Invalid arguments');
    }
});

// Require routes
    require('./app/routes/Admin.routes.js')(app);
    // Settings
        // Crm Settings
            require('./app/routes/settings/crm-settings.routes.js')(app);


app.get('*', function(req, res, next){
    res.send('This is Server Side Page');
});


var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});