"use strict";

const myApp = angular.module("funStuff", []);

// NOT A FAT ARROW: CONSTRUCTOR
myApp.controller("MsgCtrl", function($scope) {    
    $scope.message = "yo bitch";
});
myApp.controller("NameCtrl", function($scope) {
    $scope.message = "hctib oy";
});