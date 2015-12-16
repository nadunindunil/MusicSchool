/**
 * Created by NADUN on 12/14/2015.
 */

'use strict';

app.controller('StudentsCtrl',['$scope','$http','$log', function($scope,$http,$log){


    $http.get('http://localhost:3000/getStudentsList')
        .success(function(data){
            $scope.Students = data;
            console.log(data);
    })
        .error(function(err){
            $log.error(err);
        })

}]);


app.controller('TeachersCtrl',['$scope','$http','$log', function($scope,$http,$log){


    $http.get('http://localhost:3000/getTeachersList')
        .success(function(data){
            $scope.Teachers = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        })

}]);

app.controller('CoursesCtrl',['$scope','$http','$log', function($scope,$http,$log){


    $http.get('http://localhost:3000/getCoursesList')
        .success(function(data){
            $scope.Courses = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        })

}]);