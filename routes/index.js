/**
 * main rout
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
    '/information/kl4_information',
    '/information/kl4_information_acceptance',
    '/information/kl4_information_how_to_do_it',
    '/information/kl4_information_job_search',
    '/information/kl4_information_mechinot',
    '/information/kl4_information_psychometric',
    '/information/kl4_information_scholarships',
    '/base',
    '/test',
    '/test2'
];


var titlesMap = {
    '/':{
        title:'תהליך'
    },
    '/process/kl4_process':{
        title:'מחפשים כיוונים לעתיד?'
    },
    '/process/kl4_process_instruction':{
        title:'מה תמצא כאן'
    },
    '/process/kl4_process_levels':{
        title:'        שלבים מומלצים לתהליך'
    },
    '/process/kl4_process_planning':{
        title:'        תכנן ביקור נוסף'
    },
    '/process/kl4_process_to_decide':{
        title:'למה חשוב להשקיע בהחלטה'
    },
    '/process/kl4_process_what_to_study':{
        title:'מה כדאי ללמוד'
    },


    '/information/kl4_information':{
        title:'איפה כדאי ללמוד'
    },
    '/information//information/kl4_information_acceptance':{
        title:'סיכויי קבלה'
    },
    '/information/kl4_information_how_to_do_it':{
        title:'איך מממשים'
    },
    '/information/kl4_information_job_search':{
        title:'חיפוש עבודה'
    },
    '/information/kl4_information_mechinot':{
        title:'מכינות'
    },
    '/information/kl4_information_psychometric':{
        title:'פסיכומטרי'
    },
    '/information/kl4_information_scholarships':{
        title:'מלגות'
    },
    '/base':{
        title:'תהליך'
    },
    '/test':{
        title:'תהליך'
    },
    '/test2':{
        title:'תהליך'

    }
};

router.get(paths, function (req, res) {
    console.log('//////////////////////////',parseurl.original(req).pathname);
    console.log(parseurl.original(req).pathname.split("/")[1]);
    //remove first char from string
    var formName= parseurl.original(req).pathname;
    //check if exist
    console.log('----------',formName);
    var obj = {
        path:'http://localhost:3000'
    };
    if (titlesMap[formName]) {
        obj.page = titlesMap[formName];
    }
    formName = formName.substring(1)
    if (formName == "") formName = "home";
    console.log(obj);
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