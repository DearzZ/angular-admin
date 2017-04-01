/**
 * Created by dear on 3/7/17.
 */
//  visitResourcePoolCtrl   control
/**
 * Created by Administrator on 2017/2/20.
 */
/* Controllers */
//   resource_center.html controller
app.controller('visitResourcePoolCtrl', ['$scope','$cookies','$cookieStore','$modal','toaster','$http',function($scope,$cookies,$cookieStore,$modal,toaster,$http) {
    //  vm -----  页面控制对象；；；；；；；；；；    bs  传输数据对象
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};

    //  全选
    vm.checkAll = function(checked) {
        angular.forEach(vm.items, function(item) {
            item.$checked = checked;
        });
    };
    //  选中的项
    vm.selection = function() {
        return _.where(vm.items, {$checked: true});
    };
    //   表格scroll设置
    vm.setTableWidth = function(id){
        setTimeout(function () {
            var el = $(id).find('tr').eq(0);
            var elTh =  el.find('td:visible');
            var ilength = elTh.length;
            if(ilength === 0){
                elTh = $('#fixedTable').find('tr').eq(0).find('th:visible');
                ilength = elTh.length;

                elTh.css({
                    width : 110
                });
            }else{
                elTh.css({
                    width : 80
                });
                var p_wid = $(id).parent().width();
                var t_width = 140*ilength;

                if(t_width<p_wid){
                    t_width = '100%';
                }
                $('#show_table,#fixedTable').parent().css({
                    width : t_width
                });

                var th =  $('#fixedTable').find('th:visible');
                var totalWidth = $('#show_table').outerWidth();
                $('#fixedTable').css({
                    width : totalWidth
                });
                for(var i=0;i<ilength;i++){
                    var iWidth = elTh.eq(i).outerWidth();
                    th.eq(i).css({
                        width : iWidth
                    });
                }
            }
        },10);
    };
    vm.setTableWidth('#show_table');
    //   分配
    vm.openDistribute = function (currentId) {
        var modalInstance = $modal.open({
            templateUrl: 'visitResourcePoolDistribute.html',
            controller: 'ModalInstanceCtrl',
            size: 'md',
            resolve: {
                items: function () {
                    return vm.distributeList;
                }

            }
        });

        modalInstance.result.then(function (selectedItem) {
            vm.selectDistribute = selectedItem;
            toaster.pop('success', 'Title', 'Message');
        });
    };
    $http.get('/account/login.shtml').success(function(response){console.log(response)});
    $(window).unload(function(){$scope.$destroy()})
}])
;/**
 * Created by dear on 3/2/17.
 */
