'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'teacher/teacher-homeController'
], function(angular, angularRoute, view1, view2, teacherHomeCtrl) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.view1',
		'myApp.view2',
		'myApp.teacherHome'
	]).
	config(['$routeProvider', function($routeProvider) {
        $routeProvider

			.when('/view1', {
            	templateUrl: 'view1/view1.html',
            	controller: 'View1Ctrl'
        	})

        	.when('/view2', {
            	templateUrl: 'view2/view2.html',
            	controller: 'View2Ctrl'
        	})

			.when('/teacher', {
                templateUrl: 'teacher/teacher-home.html',
                controller: 'TeacherHomeCtrl'
			})

		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
});

