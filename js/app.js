"use strict";

const myApp = angular.module("funStuff", ["ngRoute"]);

myApp.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/greeting.html",
            controller: "MsgCtrl"
        })
        .when("/todo", {
            templateUrl: "partials/todo.html",
            controller: "TodoCtrl"
        })
        .when("/songs", {
            templateUrl: "partials/songs.html",
            controller: "SongCtrl"
        })
        .when("/songs/:songId", {
            templateUrl: "partials/songDetail.html",
            controller: "SongDetailCtrl"
        })
        .otherwise("/");
});