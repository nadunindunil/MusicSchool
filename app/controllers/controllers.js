/**
 * Created by NADUN on 12/14/2015.
 */

'use strict';

app.controller('StudentsCtrl',['$scope','$http','$rootScope','$log', function($scope,$http,$log,$rootScope){

    $rootScope.pageName = "Students";
    $http.get('http://localhost:3000/getCoursesList')
        .success(function(data){
            $scope.Courses = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        });

    $http.get('http://localhost:3000/getPerfGrpsList')
        .success(function(data){
            $scope.Groups = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        });

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
                console.log('test1');
            })
            .error(function(err){
                $log.error(err);
            });
        return NumList;
    };

    $scope.nums = null;



    $scope.addStudent = function(){

        var id = $scope.sID;
        var gender = $scope.sgender;
        var name = $scope.fullname;
        var dob = $scope.dob;
        var acclevel = $scope.accLevel;
        var course = $scope.course;
        var pergroup = $scope.perGroup;
        var tel = $scope.telePhone;
        var add = $scope.address;

        console.log(id,gender,name,dob,pergroup,course  );

        //$http.post('http://localhost:3000/insertTelNum',{
        //    ID: id,
        //    location: add,
        //    phone_number: tel
        //
        //});


        $http.post('http://localhost:3000/insertStudent',{
            ID: id,
            name: name,
            gender: gender,
            DOB: dob,
            access_level: acclevel,
            courseID: course,
            performance_group_ID:pergroup,
            phone_number_id:id,
            location: add,
            phone_number: tel

        });

        //STDreset();

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
        });

    $scope.addTeacher = function(){

        var id = $scope.tID;
        var gender = $scope.tgender;
        var name = $scope.name;
        var dob = $scope.dob;
        var nic = $scope.nic;
        var acclevel = $scope.accLevel;
        var tel = $scope.telephone;
        var add = $scope.address;

        console.log(id,gender,name,dob);

        $http.post('http://localhost:3000/insertTeacher',{
            ID: id,
            name: name,
            gender: gender,
            DOB: dob,
            nic:nic,
            access_level: acclevel,
            phone_number_id:id,
            location: add,
            phone_number: tel

        });

        //STDreset();

    }
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


app.controller('PerGrpCtrl',['$scope','$http','$log', function($scope,$http,$log){


    $http.get('http://localhost:3000/getPerfGrpsList')
        .success(function(data){
            $scope.Groups = data;
            console.log(data);
        })
        .error(function(err){
            $log.error(err);
        })

}]);

