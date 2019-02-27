var exec = require('cordova/exec');
/**
 * @name CCID
 * @description
 * @author Krishnendu Sekhar Das
 */
function CCID() { }

CCID.prototype.connect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CCID', 'connect', []);
};

CCID.prototype.listen = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CCID', 'listen', []);
};

CCID.prototype.transmit = function (successCallback, errorCallback, data) {
    exec(successCallback, errorCallback, 'CCID', 'transmit', [data]);
};

CCID.prototype.disconnect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CCID', 'disconnect', []);
};

module.exports = new CCID();