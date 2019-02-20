var bodyParser = require('body-parser');
// 对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});

var data = [{item:'Node is awsome!'},{item:'You will use it everywhere'},{item:'Hope Everybody can study it!'},{item:'you will get a lot from Node..'},{item:'When you feel it hard please do not give up as soon...'},{item:'maybe next second is yours...'},{item:'acturally i do not know what am i talking about..'},{item:'only know you will been high when you feeling low...'},{item:'only hate the road when you missing home..'},{item:'only know love her when you let go..'},{item:'and you let go'},{item:'ok...'},{item:'over...'}];

module.exports = function (app) {
    app.get('/',function (req,res) {
        res.render('todo',{todos:data});
    });
    app.get('/todo',function (req,res) {
        res.render('todo',{todos:data});
    });

    app.post('/todo',urlencodeParser,function (req,res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',function (req,res) {
        // 过滤当前的数据
        data = data.filter(function (todo) {
            // req.params.item
            // todo.item
            return req.params.item !== todo.item;
        });

        res.json(data);
    });
}