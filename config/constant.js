"use strict";

    /*
       * File name: constant.js
       * Purpose: define static rows
       * Arthur : Pawan Sen
      */

    var appConstant = function(){

        this.notFound = "404 Not Found";
        this.loginServerMsg = "There was a problem login the User";
        this.loginSuccessMsg = "Successfully Loggedin";
        this.loginErrorMsg = "Email and password incorrect! Authentication failed";
    }  

    module.exports = new appConstant();