"use strict";

const myApp = angular.module("funStuff", []);

// NOT A FAT ARROW: CONSTRUCTOR
myApp.controller("msgCtrl", function($scope) {    
    $scope.message = "yo bitch";
});