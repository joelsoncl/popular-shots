'use strict';

angular.module('myApp.popularShots', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/popular-shots', {
    templateUrl: 'popular-shots/popular-shots.html',
    controller: 'PopularShotsCtrl'
  });
}])

.controller('PopularShotsCtrl', ['$scope', 'Shot', function($scope, Shot) {

	/* 	Nao eh necessario, mas eh uma boa pratica declarar as
			variaveis que serao usadas no inicio para maior organizacao,
			entendimento e consequente manutenibilidade do codigo.
	*/
	$scope.shots = null;
	$scope.selectedShot = null;
	$scope.currentPage = 1;
	$scope.hasPrevLink = false;
	$scope.hasNextLink = false;

	// Construtor ----------------------------------------------
	function init() {
		invokeQuery();
	};

	// Scoped Methods ------------------------------------------
	$scope.selectShot = function(shot) {
		$scope.selectedShot = shot;
	};

	$scope.navigateTo = function(pageNumber) {
		$scope.currentPage = pageNumber;
		invokeQuery();
	};

	// Private Methods -----------------------------------------
	function invokeQuery() {
		Shot.query({pageNumber: $scope.currentPage}, function(data, header) {
				postQueryProcessing(data, header);
			}
		);
	};

	function postQueryProcessing(data, header) {
		$scope.shots = data;
		var headerLink = header('link');

		if(headerLink) {
			$scope.hasPrevLink = headerLink.search('rel="prev"') >= 0 ? true : false;
			$scope.hasNextLink = headerLink.search('rel="next"') >= 0 ? true : false;
		}
	};

	/* 	Chamada ao construtor -----------------------------------
			Estah no final para garantir o carregamento de todos os metodos
			antes de suas possiveies execucoes, pois se o construtor chamar
			outro	metodo que ainda nao foi carregado, culminara em erro.
	*/
	init();
}]);