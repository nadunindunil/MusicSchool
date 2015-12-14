'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
      $routeProvider.
          when('/home',{
              templateUrl:'templates/home.html'
          }).
          when('/students', {
              templateUrl: 'templates/students.html'

          }).
          otherwise({
              redirectTo: '/home'
          });

});
