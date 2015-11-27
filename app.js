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
    Form = require("./models/Form.js"),
    jsonfile = require('jsonfile'),
    xl = require('./api/createExcel.js'),
    bodyParser = require('body-parser'), // for reading POSTed form data into `req.body`
    expressSession = require('express-session'),
    cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it



//APP INIT
var app = express();
setEnvironment();


/**
 * Render forms when needed
 */
app.get('/forms/*', function (req, res) {
    var formName= req._parsedOriginalUrl.pathname.split("/")[2];
    //check if exist
    console.log("-----------",formName);
    var formData = jsonfile.readFileSync("koshi.json");
    var f = new Form(formData);

    var obj = {message:"YEAH! "+formName + " was found...", form:f};
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

    app.use(cookieParser());
    app.use(expressSession({secret:'somesecrettokenhere'}));
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