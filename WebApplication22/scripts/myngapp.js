angular
    .module("myngapp", ['ngMaterial'])
.config(function ($mdThemingProvider) {
   
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange')
});