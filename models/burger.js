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

    update: function (objColVals, condition, cb) {
        orm.update("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    delete: function (cols, vals, cb) {
        orm.delete("burgers", cols, vals, function (res) {
            cb(res);
        });
    }
};











module.exports = burgers;