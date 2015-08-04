/**
 * Created by 英学 on 2015/7/31.
 */
var haoWebDirectives = angular.module('haoWebDirectives', []);

haoWebDirectives.directive('haoWebUsers', ['repDataSrv', function (repDataSrv) {
    return {
        "restrict": "EA",
        "templateUrl": "tpls/dirHaoUsers.html",
        "transclude": true,
        "scope": {
            "user": '='
        },
        "link": function (scope) {
            scope.userList = repDataSrv.getUsers();
        }
    }

}]);