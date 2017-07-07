var express = require('express');
var router = express.Router();

var log4js = require('../app');


/* GET home page. */
router.get('/', function(req, res, next) {
    var logger = log4js.logger(__dirname + '/index');
    logger.debug('你比');
    logger.info("This i    kkkkkkkk   s an index page!");
    // logger.error("错误错误粗我");
    // logger.error("错误");
    // logger.warn("警告");
    res.render('index', { title: 'Express' });
});

module.exports = router;
