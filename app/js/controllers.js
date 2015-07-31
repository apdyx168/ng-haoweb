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

haoWebControllers.controller('repDetailCtrl', ['$scope',
    function ($scope) {
        $scope.data = 'detail';
    }]);

haoWebControllers.controller('repCustAnalysis1Ctrl', ['$scope', 'i18nService', 'repDataSrv',
    function ($scope,i18nService, repDataSrv) {
        i18nService.setCurrentLang('zh-cn');
        $scope.data = repDataSrv.getCustAnalysisOne();
        $scope.gridOptions = {
            enableSorting: false,
            columnDefs: [
                { name:'客户本', field: 'item_name' },
                { name:'数量', field: 'item_num' }
            ],
            data : $scope.data
        };
    }]);

haoWebControllers.controller('repCustAnalysis2Ctrl',['$scope','repDataSrv',
    function($scope,repDataSrv){
        var data = repDataSrv.getCustAnalysisTwo();

        $scope.myDataSource = {
            "chart": {
                "caption": "按标签统计客户数量",
                "subCaption":  "前十笔记录",
                "theme": "ocean"
            },
            data:data
        };
    }
])