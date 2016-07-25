var app=angular.module('routeLab',['ngRoute']);


app.config(function($routeProvider){

	$routeProvider.when('/viewDog', {
		templateUrl:'partials/viewDog.html',
		controller:'simpleController'
	});

	$routeProvider.when('/viewCat', {
		templateUrl:'partials/viewCat.html',	
		controller:'simpleController'
	});


	$routeProvider.when('/viewHome', {
		templateUrl:'partials/viewHome.html',	
		controller:'simpleController'
	
	});
});