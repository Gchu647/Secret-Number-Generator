'use strict';
module.exports = function () {
    var secretNum = 0;
    var callAgain = false;

    return function () {
        if (callAgain === false) {
            secretNum = Math.random() * 1000000;
            callAgain = true;

            return secretNum;
        } else {
            return secretNum;
        }
    }
};