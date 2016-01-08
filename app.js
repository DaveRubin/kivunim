/**
 * Created by David on 10/11/2015.
 */
'use strict'
var express = require('express'),
    swig = require("swig"),
    path = require('path'),
    fs = require('fs'),
    Form = require("./models/Form.js"),
    Config = require("./models/Config.js"),
    jsonfile = require('jsonfile'),
    xl = require('./api/createExcel.js'),
    bodyParser = require('body-parser'), // for reading POSTed form data into `req.body`
    cookieParser = require('cookie-parser'), // the session is stored in a cookie, so we use this to parse it
    parseurl = require('parseurl');

var forms = require('./routes/forms');
var routes = require('./routes/index');
//TODO: api calls var api = require....


//APP INIT
var app = express();
app.use('/', routes);
app.use('/forms', forms);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
setEnvironment();

/**
 * Start the server
 * @type {http.Server}
 */
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});

/**
 * Set environment vars and initializations
 */
function setEnvironment(){
    //FOLDERS
    app.use('/static', express.static(__dirname + '/kl4'));

    //SWIG TEMPLATE ENGINE
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    app.use(cookieParser());
    app.use(bodyParser());

    //SWIG CACHE
    var swigCache = false;
    if (!swigCache){
        swig.setDefaults({ cache: false });
    }
    else{
        app.set('view cache', false);
    }
}