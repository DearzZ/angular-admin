/**
 * Created by dear on 3/6/17.
 */
/* Controllers */
// modifyPwd controller
app.controller('modifyPwdCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    var vm = $scope.vm = {};
    // $http.get('http://192.168.199.144/user/read')
    //     .then(function (response) {
    //         console.log(response);
    //         var rsp = response.data;
    //         if(rsp.status === 'success'){
    //             vm.userData = rsp.data;
    //         }
    //        console.log(vm.userData);
    //     });
    // $scope.authError = null;
    // vm.modify = function() {
    //     $scope.authError = null;
    //     $http.post('http://192.168.199.144/user/update',vm.userData)
    //         .then(function (response) {
    //             console.log(response);
    //         },function (x) {
    //             $scope.authError = "Server Error"
    //         });
    //
    // };
}])
;