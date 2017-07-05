var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; //# 数据库为 runoob

    var insertData = function(db, callback) {
        //连接到表 site
        var collection = db.collection('site');
        //插入数据
        var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
        collection.insert(data, function(err, result) {
            if(err)
            {
                console.log('Error:'+ err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        insertData(db, function(result) {
            console.log(result);
            db.close();
        });
    });
  res.send('respond with a resource');
});

router.get('/name', function (req, res, next) {
    res.send('you are beautiful girl');
})

module.exports = router;
