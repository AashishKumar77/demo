var crypto = require('crypto');
function randomNumberGenrate() {
    var random_num = Math.floor(Math.random() * 900000) + 100000,
        de_token = random_num.toString(),
        mykey = crypto.createCipher('aes-128-cbc', 'token'),
        token_en = mykey.update(de_token, 'utf8', 'hex') + mykey.final('hex');
    return token_en;

}


module.exports = { 
    randomNumberGenrate
};