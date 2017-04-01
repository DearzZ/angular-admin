/**
 * Created by dear on 3/13/17.
 */
app.controller('intentCustomerCtrl', ['$scope', '$http', '$state','toaster',function($scope, $http, $state,toaster) {
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};

    vm.createCustomer =function (bool) {
        if(!bool){
            toaster.pop('error', '失败', '请输入必填字段');
        }else {

        }
    };
    $(window).unload(function(){$scope.$destroy()});
}])
;