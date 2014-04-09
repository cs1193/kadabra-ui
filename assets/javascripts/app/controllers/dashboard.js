'use strict';

/* Controllers */
define(['app','angular'], function (app,angular) {
	app.controller('DashboardController',['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {
		console.info("Dashboard");
	}]);
	return app;
});