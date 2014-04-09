'use strict';

define([
	'angular',
	'angularRoute',
	'angularResource',
	'angularAnimate',
	'angularCookies',
	'angularSanitize'
], function (angular) {
	return angular.module('kadabra', ['ngRoute','ngResource','ngAnimate','ngCookies','ngSanitize']);
});