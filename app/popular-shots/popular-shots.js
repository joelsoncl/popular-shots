'use strict';

angular.module('myApp.popularShots', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/popular-shots', {
    templateUrl: 'popular-shots/popular-shots.html',
    controller: 'PopularShotsCtrl'
  });
}])

.controller('PopularShotsCtrl', [function() {

}]);