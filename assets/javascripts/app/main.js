"use strict";

require.config({
	baseUrl: 'assets/javascripts/app/',
	waitSeconds: 200,
	paths: {
		jquery: 'libraries/jquery/jquery-2.1.0.min',
		angular: 'libraries/angular/angular.min',
		angularResource: 'libraries/angular/angular-resource.min',
		angularRoute: 'libraries/angular/angular-route.min',
		angularSanitize: 'libraries/angular/angular-sanitize.min',
		angularAnimate: 'libraries/angular/angular-animate.min',
		angularCookies: 'libraries/angular/angular-cookies.min',
		bootstrap: 'libraries/vendor/bootstrap/bootstrap.min'
	},
	shim: {
		'jquery': {'exports' : '$'},
		'angular': {'exports' : 'angular'},
		'angularResource': {deps:['angular']},
		'angularRoute': {deps:['angular']},
		'angularCookies': {deps:['angular']},
		'angularSanitize': {deps:['angular']},
		'angularAnimate': {deps:['angular']},
		'bootstrap': {deps:['jquery']}
	},
	priority: [
		"angular"
	],
	urlArgs: 'v=0.1',
	catchError: {
		define: true
	}
});

requirejs.onError = function (err) {
    if (err.requireType === 'timeout') {
        // tell user
        alert("error: "+err);
    } else {
        throw err;
    }
};

require( [
	'../domReady!',
	'jquery',
	'angular',
	'directives/directives',
	'app',
	'services/services',
	'controllers/controllers',
	'controllers/dashboard',
	'controllers/notifications',
	'controllers/messages',
	'controllers/inventory',
	'controllers/projects',
	'controllers/clients',
	'controllers/tasks',
	'controllers/events',
	'controllers/settings',
	'filters/filters',
	'routes'
], function(domReady, $, angular,directive, app) {
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['kadabra']);
	});
});