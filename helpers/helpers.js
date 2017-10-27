"use strict";

var resError = function (message,data){

    var errResponse = {
                         "data":data,
                         "message":message,
                         "status":false,
                         "err_code":0
                    };
    return errResponse;
}

var resSuccess = function (message,data){
    
        var successResponse = {
                             "data":data,
                             "message":message,
                             "status":true,
                             "err_code":0
                        };
        return successResponse;
}

module.exports = {resError:resError,resSuccess:resSuccess}