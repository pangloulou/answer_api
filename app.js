const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static('public'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home', {
        title: '笨笨途'
    });
});

app.listen(8006, () => {
    console.log('site start at port ', 8006);
})