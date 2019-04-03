const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require('./config/db');
const session = require('express-session');


const app = express();

const userRouter = require('./routes/user');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'answer_api!!!', //用来对session id相关的cookie进行签名
    resave: false, //是否每次都重新保存未初始化的会话,建议false
    saveUninitialized: true,//是否自动保存未初始化的会话
    cookie: {
        maxAge: 3 * 60 * 60 * 1000// 有效期，单位是毫秒
    }
}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Access-Control-Allow-Credentials", true);
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//测试连接数据库
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:' + err));

app.get('/', (req, res) => {
    res.render('home', {
        title: '笨笨途'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: '关于'
    });
});

app.use('/user', userRouter);

app.listen(8006, () => {
    console.log('site start at port ', 8006);
});