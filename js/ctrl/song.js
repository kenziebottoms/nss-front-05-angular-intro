"use strict";

angular.module("funStuff").controller("SongCtrl", function($scope, SongFactory) {
    SongFactory.getSongs().then(response => {
        $scope.songs = response.data.songs;
        // console.log(songs);
    });
});