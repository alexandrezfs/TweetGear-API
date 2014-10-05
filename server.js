var request = require('request');
var bodyParser = require('body-parser');
var config = require('./config');

var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , db = require('./models');

var app = express();

/**
 * App settings
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', routes.index);

db
    .sequelize
    .sync({ force: false })
    .complete(function (err) {
        if (err) {

            console.log(err);

        } else {

            console.log('DATABASE IS CONNECTED');

            http.createServer(app).listen(config.values.port), function () {
                console.log('Express server listening on port ' + config.values.port);
            };
        }
    });
