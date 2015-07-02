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

	// Construtor ----------------------------------------------
	function init() {
		$scope.shots = Shot.query();
	};

	// Methods -------------------------------------------------
	$scope.selectShot = function(shot) {
		$scope.selectedShot = null;
		$scope.selectedShot = shot;
	};

	/* 	Chamada ao construtor -----------------------------------
			Estah no final para garantir o carregamento de todos os metodos
			antes de suas possiveies execucoes, pois se o construtor chamar
			outro	metodo que ainda nao foi carregado, culminara em erro.
	*/
	init();
}]);