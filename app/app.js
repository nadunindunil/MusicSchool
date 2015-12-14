'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp',['ngRoute','cgBusy','ngAnimate']);

app.config(function($routeProvider){
      $routeProvider.
          when('/',{
              templateUrl:'templates/home.html'
          }).
          when('/students', {
              templateUrl: 'templates/students.html',
              controller:'StudentsCtrl'
          }).
          when('/home', {
              templateUrl: 'templates/home.html'

          }).
          otherwise({
              redirectTo: '/home'
          });

});
