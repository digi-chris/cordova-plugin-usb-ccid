var exec = require('cordova/exec');
/**
 * @name CcidUsb
 * @description This plugin is responsible to communicate with ACS ACR122U NFC reader device
 * @author Krishnendu Sekhar Das
 */
function CcidUsb() { }

CcidUsb.prototype.connect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CcidUsb', 'connect', []);
};

CcidUsb.prototype.listen = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CcidUsb', 'listen', []);
};

CcidUsb.prototype.transmit = function (successCallback, errorCallback, data) {
    exec(successCallback, errorCallback, 'CcidUsb', 'transmit', [data]);
};

CcidUsb.prototype.disconnect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'CcidUsb', 'disconnect', []);
};

module.exports = new CcidUsb();