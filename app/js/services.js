'use stack';
var haoWebServices = angular.module('haoWebServices', ['ngResource']);

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
    }]);

haoWebServices.factory('repDataSrv', ['$resource',
    function ($resource) {
        return $resource('data/:repName.json',{},{
            getCustAnalysisOne:{method:'GET',params:{ repName: 'custAnalysisOne' },isArray:true},
            getCustAnalysisTwo:{method:'GET',params:{repName: 'custAnalysisTwo' } ,isArray:true},
            getCustAnalysisThree:{method:'GET',params:{repName:'custAnalysisThree'} ,isArray:true}
        });
    }])