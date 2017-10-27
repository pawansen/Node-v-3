"use strict";

    /*
       * File name: db.js
       * Purpose: Connect and perform database operetion.
       * Arthur : Pawan Sen
      */

var mysql = require('mysql');

var Database = function(){
    var that = this;
    this.connection = mysql.createPool({
        host: 'localhost',
        user:'root',
        password:'root',
        database:'mobi96_ci_v_3',
        debug:false
    });
}

Database.prototype.getConnection = function(query,callback){
    return this.connection;
}

Database.prototype.endConnection = function(query,callback){
    this.connection.end();
}

Database.prototype.exeQuery = function(query,callback){
    this.connection.query(query, function(error, results, fields){
        callback(error, results);
    });
}

module.exports = new Database();