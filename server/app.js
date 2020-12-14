var express = require("express")
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const config = require("./config");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(compression());

app.use('/api/user', require('./api/user'));
app.use('/api/cart', require('./api/cart'));
app.use('/api/category', require('./api/category'));
app.use('/api/product', require('./api/product'));
app.use('/api/cartproduct', require('./api/cartproduct'));


app.use(cors({
    origin: [
        config.whitelistURLs
    ]
}));

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);

