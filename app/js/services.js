'use stack';
var haoWebServices = angular.module('haoWebServices', []);

haoWebServices.factory('repMenuSrv', ['$http',
    function ($http) {
        var menuSrv = {};
        var menuUrl = 'data/menu.json';
        menuSrv.getMenus = function(){
            return $http.get(menuUrl).success(function (data) {
                return data.data;
            });
        }
        return menuSrv
    }
]);

haoWebServices.factory('repTplsSrv',['$http',
    function ($http) {
        var tplSrv = {};
        tplSrv.getTplsConten = function(tplName){
            return $http.get('tpls/'+tplName+'.html');
        }
        return tplSrv;
    }
]);