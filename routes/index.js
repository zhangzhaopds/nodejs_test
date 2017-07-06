var express = require('express');
var router = express.Router();

// var logger = require('../app').logger('index');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("This i    kkkkkkkk   s an index page!");
    console.error("错误");
    console.warn("警告");
    console.debug("调试");
    res.render('index', { title: 'Express' });
});

module.exports = router;
