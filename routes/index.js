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
    '/process/kl4_process',
    '/process/kl4_process_instruction',
    '/process/kl4_process_levels',
    '/process/kl4_process_planning',
    '/process/kl4_process_to_decide',
    '/process/kl4_process_what_to_study',
    '/process/base',
    'kl4_information',
    'kl4_information_acceptance',
    'kl4_information_how_to_do_it',
    'kl4_information_job_search',
    'kl4_information_mechinot',
    'kl4_information_psychometric',
    'kl4_information_scholarships',
    '/base',
    '/test',
    '/test2'
];

router.get(paths, function (req, res) {
    console.log('//////////////////////////',parseurl.original(req).pathname);
    console.log(parseurl.original(req).pathname.split("/")[1]);
    //remove first char from string
    var formName= parseurl.original(req).pathname.substring(1);
    //check if exist
    if (formName == "") formName = "home";
    var obj = {};
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