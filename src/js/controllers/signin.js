'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    var vm =$scope.vm = {};
    $scope.authError = null;
    vm.login = function(bool) {
        // if(!bool){
        //     $scope.authError = '请输入用户名或密码'
        // }else {
        //     $scope.authError = null;
        //     // Try to login
        //     $http.get('/openapi/generateFormToken').then(function (response) {
        //         var rsp = response.data;
        //         if(rsp.status === 'success' && !rsp.code){
        //             vm.user.__token__ = rsp.data.__token__;
        //             $http.post('/account/login',vm.user
        //             ).then(function(response) {
        //                 var rsp = response.data;
        //                 if(rsp.status === 'success' && !rsp.code ){
                            $state.go('app.home');
        //                 }else {
        //                     $scope.authError = rsp.msg;
        //                 }
        //             }, function(x) {
        //                 $scope.authError = '请求错误';
        //             });
        //         }
        //     },function (x) {
        //         $scope.authError = '获取token错误';
        //     });
        // }
    };

    $(window).unload(function(){$scope.$destroy()});
}])
;