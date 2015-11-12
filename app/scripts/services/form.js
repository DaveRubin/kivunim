'use strict';

/**
 * @ngdoc service
 * @name kivunimApp.Form
 * @description
 * # KivunimForm
 * Factory in the kivunimApp.
 */
angular.module('kivunimApp')
    .factory('KivunimForm', function () {
        // Service logic
        // ...

        var MAX_QUESTIONS = 2;
        var formModel = function (model) {
            var that = this;
            this.questions = [];
            init();

            //this function will seperate the model questions into parts of X questions into each part
            function init() {
                var index = 0;

                var part = [];
                for (var i = 0; i < model.questions.length; i++) {

                    var question = model.questions[i];
                    part.push(question);
                    index++;
                    //run over the questions array and print them all!
                    if (index == MAX_QUESTIONS){
                        index = 0;
                        that.questions.push(part);
                        part = [];

                    }
                }
                if (part.length >0){
                    that.questions.push(part);
                }
                console.log(that.questions);
            }
        };
        // Public API here
        return formModel;
    });
