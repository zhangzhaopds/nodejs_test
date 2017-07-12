var express = require('express');
var router = express.Router();

// var log4js = require('../app');
var fs = require("fs");
var path= require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    // var logger = log4js.logger(__dirname + '/index');
    // logger.debug('你比');
    // logger.info("This i    kkkkkkkk   s an index page!");
    // logger.error("错误错误粗我");
    // logger.error("错误");
    // logger.warn("警告");


    // 百度ai
    // var AipOCR = require('baidu-ai').ocr;
    // console.log(AipOCR);
    //
    // var APPID = '9864695';
    // var APPKEY = 'X4y7WUlXwIjlF41y3KEXV99g';
    // var APPSECRET = 'TnnNZYZP1cYzSsRDR7naDIZTVcsk5RoX';
    //
    // var imgPath = path.join(__dirname, '../public/images/baseword.png')
    // console.log(imgPath)
    // var img = fs.readFileSync(imgPath);
    // var base64img = new Buffer(img).toString('base64');
    // var client = new AipOCR(APPID, APPKEY, APPSECRET);
    // client.generalBasic(base64img, {detect_direction: true, detect_language: true}).then(function (result) {
    //     console.log(JSON.stringify(result));
    //     res.contentType('json');
    //     res.send(JSON.stringify(result));
    //     // res.json(result);
    // });

    res.render('index', { title: 'Express' });
});



module.exports = router;
