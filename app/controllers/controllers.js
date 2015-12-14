/**
 * Created by NADUN on 12/14/2015.
 */

app.controller('StudentsCtrl',['$scope','$http', function($scope,$http){
    $http.get('./php/popData.php')
        .success(function(data){
            $scope.Students = data;
    })
        .error(function(err){
            $log.error(err);
        })

}]);