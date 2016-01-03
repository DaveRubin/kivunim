/**
 * Created by David on 03/01/2016.
 */
'use strict'
var express = require('express'),
    router = express.Router(),
    jsonfile = require('jsonfile'),
    Form = require("../models/Form.js"),
    fs = require('fs'),
    parseurl = require('parseurl');

var paths = [
    '/'
];
router.get('/', function (req, res) {
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

module.exports = router;