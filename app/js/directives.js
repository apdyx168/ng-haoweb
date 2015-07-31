/**
 * Created by 英学 on 2015/7/31.
 */
var haoWebDirectives = angular.module('haoWebDirectives',[]);

haoWebDirectives.directive('haoWebUsers',function(){
    return {
        "restrict": "EA",
        "template": "<div>haoWebUsers</div>",
        "replace": true
    };
});