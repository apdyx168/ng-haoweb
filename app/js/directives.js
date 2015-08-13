/**
 * Created by 英学 on 2015/7/31.
 */
var haoWebDirectives = angular.module('haoWebDirectives', []);

haoWebDirectives.directive('haoWebUsers', ['repWebSrv', function (repWebSrv) {
    return {
        "restrict": "EA",
        "templateUrl": "tpls/dirHaoUsers.html",
        "transclude": true,
        "scope": {
            "user": '='
        },
        "link": function (scope) {
            repWebSrv.getUserList().get(function (data) {
                scope.userList = data.table;
            });
        }
    }
}]);

haoWebDirectives.directive('haoWebCustCol', ['repWebSrv', function (repWebSrv) {
    return {
        "restrict": "EA",
        "templateUrl": "tpls/dirHaoCustCol.html",
        "transclude": true,
        "scope": {
            "custCol": '='
        },
        "link": function (scope) {
            repWebSrv.getCustColList().get(function (data) {
                scope.custColList = data.table;
            });
        }
    }
}]);
