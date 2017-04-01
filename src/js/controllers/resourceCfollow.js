/**
 * Created by dear on 3/13/17.
 */
app.controller('resourceCfollowCtrl', ['$scope', '$http', '$state','toaster',function($scope, $http, $state,toaster) {
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};

//  补充信息初始隐藏
    vm.supinfo = false;
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
    $(window).unload(function(){$scope.$destroy()});
}])
;