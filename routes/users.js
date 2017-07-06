var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    // var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; //# 数据库为 runoob
    var DB_CONN_STR = 'mongodb://admin:admin123456@ds147842.mlab.com:47842/jmspvu';

    var insertData = function(db, callback) {
        //连接到表 site
        var jmspvu = db.collection('site');

        //插入数据
        var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
        jmspvu.insert(data, function(err, result) {
            if(err)
            {
                console.log('Error:'+ err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {

        if (err == null) {
            console.log("连接成功！");
            insertData(db, function(result) {
                console.log(result);
                db.close();
            });
        } else {
            console.log("数据库连接失败");
        }

    });
  res.send('respond with a resource');
});

router.get('/name', function (req, res, next) {
    console.log('name');
    res.send('you are beautiful girl');
})

module.exports = router;
