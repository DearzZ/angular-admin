/**
 * Created by dear on 3/6/17.
 */
app.controller('systemSourceCtrl', ['$scope','$modal','toaster','$http',function($scope,$modal,toaster,$http) {
    //  vm -----  页面控制对象；；；；；；；；；；    bs  传输数据对象
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};

    // 修改
    vm.revise = function (item) {
        item.$editing = true;
    };
    //保存
    vm.save = function (item) {
        item.$editing = false;
    };
    //  取消
    vm.cancel = function (item) {
        item.$editing = false;
    };
    vm.delete =function (item) {
        vm.promptText = '确认删除当前渠道吗？';
        var modalInstance = $modal.open({
            templateUrl: 'sourceDelete.html',
            controller: 'ModalInstanceCtrl',
            size: 'md',
            resolve: {
                items: function () {
                    return vm.promptText;
                }

            }
        });

        modalInstance.result.then(function () {
            toaster.pop('success', 'Title', 'Message');
        });
    };

//  生成 随机数据 //  生成 随机数据
    vm.items = [];
    var MAX_NUM = 12;
    function rand(min, max) {
        return min + Math.round(Math.random() * (max-min));
    }
    for (var i = 0; i < MAX_NUM; ++i) {
        vm.items.push({
            k_state:rand(0, 100),
            source_one:rand(0, 100 * 1000 * 100),
            source_two:rand(0, 100 * 1000 * 10),
            source_three:rand(0, 100 * 1000),
            source_four:rand(0, 100),
            plan:rand(0, 1000),
            unit:rand(0,1000 * 1000)
        });

    }
    $(window).unload(function(){$scope.$destroy()})
}])
;