/**
 * Created by dyx on 2015/7/28.
 */
var haoWebControllers = angular.module('haoWebControllers', []);
haoWebControllers.controller('repListCtrl', ['$scope',
    function ($scope) {
        $scope.liFocus = false;
        $scope.setFocus = function (e) {
            $scope.liFocus = true;
        }
    }
])