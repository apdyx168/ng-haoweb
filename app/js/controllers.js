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
    function ($scope, i18nService, repDataSrv) {
        i18nService.setCurrentLang('zh-cn');
        $scope.data = repDataSrv.getCustAnalysisOne();
        $scope.gridOptions = {
            enableSorting: false,
            columnDefs: [
                {name: '客户本', field: 'item_name'},
                {name: '数量', field: 'item_num'}
            ],
            data: $scope.data
        };
    }]);

haoWebControllers.controller('repCustAnalysis2Ctrl', ['$scope', 'repDataSrv',
    function ($scope, repDataSrv) {
        var data = repDataSrv.getCustAnalysisTwo();
        $scope.myDataSource = {
            "chart": {
                "caption": "按标签统计客户数量",
                "subCaption": "前十笔记录",
                "theme": "fint",

                "usePlotGradientColor": "1"
            },
            data: data
        };
    }
]);

haoWebControllers.controller('repCustAnalysis3Ctrl', ['$scope', 'repWebSrv',
    function ($scope, repWebSrv) {
        $scope.myDataSource = {};
        $scope.retrieve = function () {
            var repUser = $scope.user.item_id;
            var repColName = $scope.custCol.typecol_column;
            repWebSrv.getCustAnalysisThree(repUser, repColName).get(function (data) {
                var result = data.table;
                var category = [];
                var dataset = [];
                var objLabel = {};
                var objData = {};
                var labelId = 0
                var dataId = 0;
                for (var i = 0; i < result.length; i++) {
                    var itemId = result[i].item_id;
                    var itemName = result[i].item_name;
                    var itemUser = result[i].item_user;
                    var itemUserName = result[i].item_username;
                    var itemCount = result[i].item_count;

                    if (objLabel[itemId] == undefined) {
                        objLabel[itemId] = labelId;
                        labelId++;
                        category.push({
                            "label": itemName
                        });
                    }

                    if (objData[itemUser] == undefined) {
                        objData[itemUser] = dataId;
                        dataId++;
                        dataset.push({
                            "seriesname": itemUserName,
                            "data": []
                        })
                        console.log(itemUser);
                        console.log(objData);
                        console.log(objLabel);
                    }

                    dataset[objData[itemUser]].data[objLabel[itemId]] = {
                        "value": itemCount
                    };
                }

                $scope.myDataSource = {
                    "chart": {
                        "caption": "Daily Visits",
                        "subcaption": "(from 8/6/2013 to 8/12/2013)",
                        "linethickness": "1",
                        "showvalues": "0",
                        "formatnumberscale": "0",
                        "anchorradius": "2",
                        "divlinecolor": "666666",
                        "divlinealpha": "30",
                        "divlineisdashed": "1",
                        "bgcolor": "FFFFFF",
                        "showalternatehgridcolor": "0",
                        "labelpadding": "10",
                        "canvasborderthickness": "1",
                        "legendiconscale": "1.5",
                        "legendshadow": "0",
                        "legendborderalpha": "0",
                        "legendposition": "right",
                        "canvasborderalpha": "50",
                        "numvdivlines": "5",
                        "vdivlinealpha": "20",
                        "showborder": "0"
                    },
                    "categories": [
                        {
                            "category": category
                        }
                    ],
                    "dataset": dataset
                };
            });
        };


    }
]);