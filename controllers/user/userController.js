var express = require('express');
var router = express.Router();
var dateFormate = require('dateformat');
var bodyParser = require('body-parser');
var Database= require('../../config/db');
var constant = require('../../config/constant');
var helper = require('../../helpers/helpers');
var  cryptr   =  require('cryptr');

router.use(bodyParser.json({limit: '1500mb'}));
router.use(bodyParser.urlencoded({limit: '1500mb',extended: true}));

function uLogin(req, res){
    req.check("email","Email is required").notEmpty();
    req.check("email","The email field must contain a valid email address").isEmail();
    req.check("password","Password is required").notEmpty();
    req.getValidationResult().then(function(result){
        if(!result.isEmpty()){
            var errors = result.array();
            res.send({"message":errors[0].msg,"params":errors[0].param,"status":false,"session_satus":true}); 
        }else{
            var password = req.body.password;
            var sqlQry = "SELECT * FROM users WHERE email = '"+req.body.email+"' AND password = '"+req.body.password+"'";
            Database.exeQuery(sqlQry,function(err,user){
                if (err) return res.status(500).send(helper.resError(constant.loginServerMsg,user)).end();
                if(user != "")
                 {
                     return res.status(200).send(helper.resSuccess(constant.loginSuccessMsg,user[0])).end();
                 } 
                  else{
                      return res.status(404).send(helper.resError(constant.loginErrorMsg,user)).end();
                   }
            });
        }

    });
    
}


router.post('/login',uLogin);
module.exports = router;