/**
 * Created by NADUN on 12/14/2015.
 */

'use strict';

app.controller('StudentsCtrl',['$scope','$http','$log', function($scope,$http,$log){

    $scope.name = "Students Management";
    $http.get('http://localhost:3000/getStudentsDetails')
        .success(function(data){
            $scope.Students = data;
            console.log(data);
    })
        .error(function(err){
            $log.error(err);
        })

}]);