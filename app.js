/**
 * Created by David on 10/11/2015.
 */
require('./api/createExcel.js');

var express = require('express'),
    swig = require("swig"),
    path = require('path'),
    fs = require('fs'),
    xl = require('./api/createExcel.js');
var app = express();
xl.createExcel()


app.use(express.static(__dirname + '/app'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

console.log(fs.existsSync("views/test2.html"));

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

app.get('/forms/*', function (req, res) {
    var formName= req._parsedOriginalUrl.pathname.split("/")[2];
    var obj = {message:"YEAH! "+formName + " was found..."};
    //check if exist
    if (fs.existsSync("views/"+formName+".html")) {
        // Do something
        res.render(formName, obj);
    }
    else {
        //if not render 404
        res.render("404", obj);
    }
});

app.get('/api/',function (req,res){

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});