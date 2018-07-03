'use strict';
module.exports = function () {
    var secretNum = Math.random() * 1000000;

    return function () {
        return secretNum;
    }
};