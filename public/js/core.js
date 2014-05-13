/**
 * Created by dossorio on 13/05/2014.
 */

var tanksApp = angular.module('tanksApp', []);

function mainController($scope, $http) {
    $scope.formData = {};


    $http.get('/tanks')
        .success(function (data) {
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $scope.createTank = function () {
        $http.post('/tanks', $scope.formData)
            .success(function (data) {
                console.log(data);
            })
            .error(function (data) {
                console.log(data);
            });
    };

    $scope.disconnectTank = function () {
        $http.delete('/tanks/disconnect', $scope.formData)
            .success(function (data){
                console.log(data);
            })
            .error(function (data){
                console.log('Error' + data);
            });
    };
}
