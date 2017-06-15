(function () {
    "use strict"

    angular
        .module("myngapp")
        .controller("myngcntrl", function ($scope, myngappFactory, $mdSidenav) {

            myngappFactory.getmyngapp().then(function (file_data) {
                $scope.myobject = file_data.data;
                //console.log(data);
            })            

            $scope.opensidebar = function () {

                $mdSidenav('left').open();
            };

            $scope.closesidebar = function () {
                $mdSidenav('left').close();
            }

            $scope.saveMyobjectView = function (myobject_sf) {
                if (myobject_sf) {
                    $scope.myobject.push(myobject_sf);
                    $scope.myobject_view = {};
                    $scope.closesidebar();
                }                
            }
            $scope.name = "Narek";
        })
})();