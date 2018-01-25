"use strict";

// no [] dependencies when referencing an existing module (created in app.js)
angular.module("funStuff").controller("TodoCtrl", function($scope) {
    $scope.todos = [
        { name: "Master HTML", completed: true },
        { name: "Master CSS", completed: true },
        { name: "Get started with ExpressJS", completed: false }
    ];
});