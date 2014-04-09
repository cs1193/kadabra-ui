define([
	'app'
], function(app) {

	app.run(['$rootScope', '$http' ,'$location',  function ($rootScope,$http,$location) {

	}]);

	app.config(['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider) {


		$routeProvider.when('/', {
			templateUrl: 'assets/javascripts/app/partials/dashboard.html',
			controller: 'DashboardController'
		});

		$locationProvider.html5Mode(true);

		$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	}]);

	return app;

});