const express = require('express');
const app = express();
const parser = require('body-parser');
const router = express.Router();
const routes = require('./api/routes');
const port = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//allow api access to anybody, any type of request
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

routes(app, {});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});

