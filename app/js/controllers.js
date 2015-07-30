/**
 * Created by dyx on 2015/7/28.
 */
var haoWebControllers = angular.module('haoWebControllers', []);
haoWebControllers.controller('repListCtrl', ['$scope','repMenuSrv',
    function ($scope,repMenuSrv) {
         repMenuSrv.getMenus().then(function(menu){
             $scope.menuItems = menu.data;
        })}
]);