'use strict'

module.exports = exports = (str) => {
    if (typeof str == 'string') {
        return `Hello ${str}`;
    }
    else {
        return null;
    }
};