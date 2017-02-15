'use strict';

angular.module('esqueleto.controllers', [ ]);

angular.module('esqueleto', [
		'ngAnimate',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'esqueleto.controllers'
	])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	}])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				template: '<h1>Home View</h1>'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);
