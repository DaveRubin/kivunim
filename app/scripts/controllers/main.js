'use strict';

/**
 * @ngdoc function
 * @name kivunimApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kivunimApp
 * TODO: add feedback for invalid form
 */
angular.module('kivunimApp')
    .controller('MainCtrl', function ($scope, KivunimForm) {
        var USER_DATA = "userData";
        var Q_DATA = "questionsData";

        var tmpUser = localStorage.getItem("userData");
        var tmpQuestions = localStorage.getItem("questionsData");

        var debug = true;

        var userFields = ["age","edu","sex","year","before"];
        $scope.sections = sections;
        $scope.questions = tmpQuestions? JSON.parse(tmpQuestions): {};
        $scope.user = tmpUser? JSON.parse(tmpUser): {};

        $scope.$watch("user",onUserChange,true);
        $scope.$watch("questions",onQuestionsChange,true);
        $scope.Math = window.Math;
        $scope.currentPage = 0; //page 0 is user details ,1 is page 1 exc...
        //$scope.mainForm = new KivunimForm(questions);
        $scope.values = [7, 6, 5, 4, 3, 2, 1];

        function onUserChange(newVal,oldval){
            localStorage.setItem(USER_DATA, JSON.stringify(newVal));
        }
        function onQuestionsChange(newVal,oldval){
            console.log(newVal);
            localStorage.setItem(Q_DATA, JSON.stringify(newVal));
        }

        function checkMandatoryFieldsIn(fields,targetObject) {
            for (var i = 0; i < fields.length; i++) {
                var fieldName = fields[i];
                if (!targetObject[fieldName]){
                    console.log(fieldName+ " is missing",targetObject);
                    if (!debug)  return false;
                }
            }
            return true
        }

        $scope.nextClicked = function () {
            //case user details
            var ok = true;
            if ($scope.currentPage == 0 ) {
                ok = checkMandatoryFieldsIn(userFields,$scope.user);
                if (ok){
                    $scope.currentPage ++;
                }

            }
            else {
                //check if current items are cheked (all are defined)
                var mandatory = [];
                for (var i = 1 ; i <= perSection; i++) {
                    var index = i+ ($scope.currentPage-1)*perSection;
                    mandatory.push("koshi"+index);
                }
                ok = checkMandatoryFieldsIn(mandatory,$scope.questions);
                if ($scope.currentPage < sections && ok) {
                    $scope.currentPage++;
                }
            }
        };

        $scope.backClicked = function () {
            console.log($scope.questions);
            for (var i = 1 ; i <= perSection; i++) {
                var index = i+ $scope.currentPage*perSection;
                console.log("koshi"+index+":",$scope.questions["koshi"+index]);
            }
            if ($scope.currentPage > 0) {

                $scope.currentPage--;
            }
            console.log($scope.questions);
            console.log($scope.currentPage);
        };

    });
