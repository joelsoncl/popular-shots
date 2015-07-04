'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'angular-loading-bar',
  'myApp.popularShots',
  'dribbbleService'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/popular-shots'});
}])

// Configuracao para remocao do 'spinner' que concorre com a 'load bar'
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);
