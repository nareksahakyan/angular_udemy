(function () {
    "use strict";

    angular
    .module("myngapp")
    .factory("myngappFactory", function ($http) {
        function getmyngapp() {
            return $http.get('data/myngappdata.json');
        };
        return {
            getmyngapp:getmyngapp
        }
    })
})();