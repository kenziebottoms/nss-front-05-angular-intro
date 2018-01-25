"use strict";

angular.module("funStuff").factory("SongFactory", function($q, $http) {
    let getSongs = () => {
        // new angular shit: $q = promises
        return $q((resolve, reject) => {
            // new angular shit: $http = ajax
            $http.get("../../../json/songs.json")
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    };

    return { getSongs };
});