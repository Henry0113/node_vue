const util = require('util');
const utils = require('../utils');

let map = utils.makeMap('name', 'hong');
util.log("map>>", map.get('name'));

return;

let str = 'nodejs';
let enc = utils.encrypt(str);
let dec = utils.decrypt(enc)
let shaEnc = utils.encryptSha2(str);

util.log('enc=', enc);
util.log('dec=', dec);
util.log('shaEnc=', shaEnc);
util.log('enc=', utils.encrypt(str, 'aaa'));

// utils.encrypt(str);

return;


let url = 'https://www.naver.com';
utils.ogsinfo(url, (err, ret)=>{
    util.log(ret);
});
