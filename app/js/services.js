'use stack';
var haoWebServices = angular.module('haoWebServices', []);

haoWebServices.factory('repMenuSrv', ['$http',
    function ($http) {
        var menuSrv = {};
        var menuUrl = 'data/menu.json';
        menuSrv.getMenus = function () {
            return $http.get(menuUrl).success(function (data) {
                return data.data;
            });
        }
        return menuSrv
    }
]);

haoWebServices.factory('repTplsSrv', ['$http',
    function ($http) {
        var tplSrv = {};
        tplSrv.getTplsContent = function (tplName) {
            var reg = /^[0-9]{1,4}/;
            if (tplName.match(reg)) {
                tplName = 'repDetail';
            }
            return $http.get('tpls/' + tplName + '.html');
        }
        return tplSrv;
    }
]);