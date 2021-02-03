var connection = require("../config/connection.js");
var tableInput = "burgers";

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (tableName, cols, vals, callback) => {

    },



    updateOne: (tableName, cols, vals, condition, callback) => {





    },



}











module.exports = orm;