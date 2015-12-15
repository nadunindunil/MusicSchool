'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp',['ngRoute','cgBusy','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
      $routeProvider.
          when('/',{
              templateUrl:'templates/home.html'
          }).
          when('/students', {
              templateUrl: 'templates/students.html',
              controller:'StudentsCtrl'
          }).
          when('/teachers', {
              templateUrl: 'templates/teachers.html',
              controller:'TeachersCtrl'
          }).
          when('/home', {
              templateUrl: 'templates/home.html'

          }).
          otherwise({
              redirectTo: '/home'
          });

}]);
