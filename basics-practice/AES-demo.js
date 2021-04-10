// var CryptoJS = require("crypto-js");
var encUtf8 = require("crypto-js/enc-utf8");
var md5 = require("crypto-js/md5");
var AES = require("crypto-js/AES");
var CryptoJS = require("crypto-js");

function encrypt_str(str) {
    var KEY = '123';
    var IV = md5(KEY).toString().substr(8, 16);
    KEY = md5(KEY).toString().substr(0, 16);
    var key = encUtf8.parse(KEY); // 秘钥
    var iv = encUtf8.parse(IV); //向量iv
    var encrypted = AES.encrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        // padding: CryptoJS.pad.Pkcs7,
        padding: CryptoJS.pad.ZeroPadding,
    });
    return encrypted.toString();
}

function decrypt_str(str) {
    var KEY = '123';
    var IV = md5(KEY).toString().substr(8, 16);
    KEY = md5(KEY).toString().substr(0, 16);
    var key = encUtf8.parse(KEY); // 秘钥
    var iv = encUtf8.parse(IV); //向量iv
    var decrypted = AES.decrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        // padding: CryptoJS.pad.Pkcs7,
        padding: CryptoJS.pad.ZeroPadding,
    });
    return decrypted.toString(encUtf8);
}

console.log(encrypt_str("123456"))
console.log(decrypt_str("LKJblPnIt9e4xTGuAwX4ig=="))
console.log(decrypt_str("Pb5VX1leodopYmXONBXDUQ=="))
