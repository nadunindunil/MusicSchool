/**
 * Created by NADUN on 12/14/2015.
 */

'use strict';

app.controller('StudentsCtrl',['$scope','$http', function($scope,$http){

    $scope.name = "Students Management";
    $http.get('./php/popData.php')
        .success(function(data){
            $scope.Students = data;
            console.log(data);
    })
        .error(function(err){
            $log.error(err);
        })

}]);