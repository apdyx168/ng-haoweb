/**
 * Created by dyx on 2015/7/28.
 */
'use stack';
haoWeb = angular.module('haoWebApp', [
    'ngResource',
    'ngAnimate',
    'ui.router',
    'ui.grid',
    'haoWebControllers',
    'haoWebServices'
]);

haoWeb.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

haoWeb.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.
                state('home', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'tpls/home.html'
                        },
                        'repDetail@home': {},
                        'repList@home': {
                            templateUrl: 'tpls/repList.html',
                            controller: 'repListCtrl'
                        }
                    }
                }).
                state('home.detail', {
                    url: ':repId',
                    views: {
                        'repDetail@home': {
                            templateProvider: ['$stateParams', 'repTplsSrv',
                                function ($stateParams, repTplsSrv) {
                                   return repTplsSrv.getTplsConten($stateParams.repId).then(function(tpl){
                                       return tpl.data;
                                   })
                                }
                            ]
                        }
                    }
                }
            )
        }]
);