'use strict'

module.exports = exports = (num1, num2) => {
    let obj = {};
    const add = (num1,num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            return;
        }
        else {
            obj.added = num1 + num2;
        }
    }

    const sub = (num1,num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            return;
        }
        else {
            obj.subtracted = num1 - num2;
        }
    }
    add(num1,num2);
    sub(num1,num2);
    return obj;
    
};