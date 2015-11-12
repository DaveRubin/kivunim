/**
 * Created by David on 10/11/2015.
 */
//require('./api/createExcel.js');

/**
 * REQUIREMENTS
 */
var express = require('express'),
    swig = require("swig"),
    path = require('path'),
    fs = require('fs'),
    xl = require('./api/createExcel.js');

//APP INIT
var app = express();
setEnvironment();

/**
 * Render forms when needed
 */
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

/**
 * Handle api ajax calls
 */
app.get('/api/',function (req,res){

});

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
    app.use(express.static(__dirname + '/app'));

    //SWIG TEMPLATE ENGINE
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    //SWIG CACHE
    var swigCache = false;
    if (!swigCache){
        swig.setDefaults({ cache: false });
    }
    else{
        app.set('view cache', false);
    }

}