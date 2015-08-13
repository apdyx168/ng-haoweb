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
        return $resource('data/:repName.json', {}, {
            getCustAnalysisOne: {method: 'GET', params: {repName: 'custAnalysisOne'}, isArray: true},
            getCustAnalysisTwo: {method: 'GET', params: {repName: 'custAnalysisTwo'}, isArray: true},
            getCustAnalysisThree: {method: 'GET', params: {repName: 'custAnalysisThree'}, isArray: true},
            getUsers: {method: 'GET', params: {repName: 'users'}, isArray: true}
        });
    }]);

haoWebServices.factory('repWebSrv', ['$resource', '$rootScope',
    function ($resource, $rootScope) {
        var webSrv = {};
        var url = '../WebSrv.asmx/';
        var params = {};
        webSrv.getCustAnalysisOne = function (repUser) {
            params.repName = 'CustAnalysis1';
            params.repUser = repUser;
            return $resource(url + ':functionName',{
                functionName: 'RepGetData',
                sessionID: $rootScope.$stateParams.sessionID,
                jsonParameter: JSON.stringify(params)
            });
        };
        webSrv.getCustAnalysisTwo = function (repUser) {
            params.repName = 'CustAnalysis2';
            params.repUser = repUser;
            return $resource(url + ':functionName',{
                functionName: 'RepGetData',
                sessionID: $rootScope.$stateParams.sessionID,
                jsonParameter: JSON.stringify(params)
            });
        };
        webSrv.getCustAnalysisThree = function (repUser, repColName) {
            params.repName = 'CustAnalysis3';
            params.repUser = repUser;
            params.repColName = repColName;
            return $resource(url+ ':functionName',{
                functionName: 'RepGetData',
                sessionID: $rootScope.$stateParams.sessionID,
                jsonParameter: JSON.stringify(params)
            });
        };
        webSrv.getCustColList = function () {
            params.repName = 'CustColList';
            params.repUser = '';
            return $resource(url + ':functionName',{
                functionName: 'RepGetData',
                sessionID: $rootScope.$stateParams.sessionID,
                jsonParameter: JSON.stringify(params)
            } );
        };
        webSrv.getUserList = function(){
            params.repName = 'UserList';
            params.repUser = '';
            return $resource(url + ':functionName',{
                functionName: 'RepGetData',
                sessionID: $rootScope.$stateParams.sessionID,
                jsonParameter: JSON.stringify(params)
            } );
        }
        return webSrv;
    }])