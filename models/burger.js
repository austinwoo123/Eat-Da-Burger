var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, function (result) {
            cb(result);
        })

    },


    updateOne: (cols, vals, condition, callback) => {




    }

};









module.exports = burgers;