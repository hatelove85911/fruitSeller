// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';

var token = 'weixin';

var url = require('url'),
    crypto = require('crypto'),
    querystring = require('querystring');


var wechat = require('wechat')
var config = {
  token: 'weixin',
  appid: 'wx84fc209d27bb487e'
  // encodingAESKey: 'encodinAESKey'
};


var express = require('express')
var app = Express()

app.use(express.query())

app.get('/weixin/verify', function (req, res) {
    var queryObj = querystring.parse(url.parse(req.url).query);
    var signature = queryObj.signature,
        timestamp = queryObj.timestamp,
        nonce = queryObj.nonce,
        echostr = queryObj.echostr;

    var sha1 = crypto.createHash('sha1'),
        sha1Str = sha1.update([token, timestamp, nonce].sort().join('')).digest('hex');

    res.writeHead(200, {'Content-Type': 'text/plain'});
    return res.end((sha1Str === signature) ? echostr : '');
})

app.post('/weixin/verify', wechat(config, function (req, res, next) {
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://img5.imgtn.bdimg.com/it/u=1122446499,1497079184&fm=11&gp=0.jpg',
        url: 'http://34b09ee4.ngrok.io'
      }
    ]);
}))

// Picker.route('/weixin/verify', wechat(config, function (req, res, next) {
  
//   console.log(req)

//   if (req.method === 'GET') {
//     var queryObj = querystring.parse(url.parse(req.url).query);
//     var signature = queryObj.signature,
//         timestamp = queryObj.timestamp,
//         nonce = queryObj.nonce,
//         echostr = queryObj.echostr;

//     var sha1 = crypto.createHash('sha1'),
//         sha1Str = sha1.update([token, timestamp, nonce].sort().join('')).digest('hex');

//     console.log("my signature: " + sha1Str);

//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     return res.end((sha1Str === signature) ? echostr : '');
//   }
// }));

// Picker.route('/weixin/verify', function(params, req, res, next) {
//   console.log(params)
//   if (req.method === 'GET') {
//     var queryObj = querystring.parse(url.parse(req.url).query);
//     var signature = queryObj.signature,
//         timestamp = queryObj.timestamp,
//         nonce = queryObj.nonce,
//         echostr = queryObj.echostr;

//     // var sha1 = crypto.createHash('sha1'),
//     //     sha1Str = sha1.update([token, timestamp, nonce].sort().join('')).digest('hex');

//     // console.log("my signature: " + sha1Str);

//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     // return res.end((sha1Str === signature) ? echostr : '');
//     return res.end(echostr);
//   }

//   if(req.method === 'POST') {
//     debugger;

//   }
// });
