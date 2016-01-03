/**
 * Created by David on 03/01/2016.
 */
var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile'),
    Form = require("../models/Form.js"),
    fs = require('fs'),
    parseurl = require('parseurl');


var paths = [
    '/',
    '/base',
    '/test',
    '/test2'
];

router.get(paths, function (req, res) {
    console.log('//////////////////////////');
    console.log(parseurl.original(req).pathname.split("/")[1]);
    var formName= parseurl.original(req).pathname.split("/")[1];
    //check if exist

    console.log("-----------",formName);
    if (formName == "") formName = "intro";
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