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
        });



    $scope.findTelNums = function(ID){
        var NumList;
        $http.get('http://localhost:3000/findTelNum/'+ ID)
            .success(function(data){
                $scope.NumList = data;
                NumList = data;
                console.log(data);
            })
            .error(function(err){
                $log.error(err);
            });
        return NumList;
    }

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

app.controller('TelNumCtrl',['$scope','$http','$log', function($scope,$http,$log){


    $http.get('http://localhost:3000/getTelNumList')
        .success(function(data){
            $scope.TelNumbers = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        })

}]);

app.controller('TelNumCtrl',['$scope','$http','$log', function($scope,$http,$log){




}]);