/**
 * Created by dyx on 2015/7/28.
 */
var haoWebControllers = angular.module('haoWebControllers', []);
haoWebControllers.controller('repListCtrl', ['$scope', 'repMenuSrv',
    function ($scope, repMenuSrv) {
        repMenuSrv.getMenus().then(function (menu) {
            $scope.menuItems = menu.data;
        })
    }
]);

haoWebControllers.constructor('repCustAnalysis1Ctrl', ['$scope',
    function ($scope) {
        $scope.data = 'test';
    }]);


haoWebControllers.constructor('repDetailCtrl', ['$scope',
    function ($scope) {
        $scope.data = 'detail';
    }]);