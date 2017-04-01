/**
 * Created by dear on 3/14/17.
 */
app.controller('intentCfollowCtrl', ['$scope', '$http', '$state','toaster',function($scope, $http, $state,toaster) {
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};
    vm.setDate = function (d) {
        bs.lastFollowTime = '';
        var myDate=new Date();
        myDate.setDate(myDate.getDate() + d);
        var year = myDate.getFullYear();
        var month = myDate.getMonth()+1;
        var day = myDate.getDate();
        if(month < 10){
            month ='0' + month;
        }
        if(day < 10){
            day = '0' + day;
        }
        bs.lastFollowTime = year + '-' + month+ '-' + day;
    };
//  补充信息初始隐藏
    vm.supinfo = false;

    $(window).unload(function(){$scope.$destroy()});
}])
;