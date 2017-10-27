var express = require('express');
var app = express();
var db = require('./config/db');
var expressValidator = require('express-validator');
app.use(expressValidator());

    app.use('*',function(req, res, next){
        // CORS headers
        var responseSettings = {
            "AccessControlAllowOrigin": req.headers.origin,
            "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
            "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
            "AccessControlAllowCredentials": true
        };
            // Set custom headers for CORS
        res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
        res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
        res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
        res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);
        if('OPTIONS' == req.method){
            res.send(200).end();
        }else{
            next();
        }
    });

// ADD THESE TWO LINES
var userController = require('./controllers/user/index');
app.use('/user-module',userController);
module.exports = app;