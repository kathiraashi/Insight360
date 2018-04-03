var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var port = process.env.PORT || 4000;
var app = express();


// Process On Every Error
    process.on('unhandledRejection', (reason, promise) => {
        console.error("'Un Handled Rejection' Error  - " + reason);
    });
    process.on('uncaughtException', function (err) {
        console.error(" 'Un Caught Exception' Error  - " + err);
    });


// DB Connection
    mongoose.connect('mongodb://localhost/Insight360_Admin');
    mongoose.connection.on('error', function(err) {
        return res.status(403).end('This is Server Side Page');
    });
    mongoose.connection.once('open', function() {
        console.log('Insight360_Admin Successfully Connected');
        
    });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Require routes
    require('./app/routes/Admin.routes.js')(app);

            
app.get('*', function(req, res, next){
    res.send('This is Server Side Page');
});


var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});