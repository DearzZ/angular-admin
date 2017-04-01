/**
 * Created by Administrator on 2017/2/20.
 */
/* Controllers */
//   resource_center.html controller
app.controller('ResourceCenterCtrl', ['$scope','$cookies','$cookieStore','$modal','toaster','$http',function($scope,$cookies,$cookieStore,$modal,toaster,$http) {
    //  vm -----  页面控制对象；；；；；；；；；；    bs  传输数据对象
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};
    //   默认选中显示姓名
    vm.selectType= ['name'];
    // 条件多选show or hide
    $scope.$watch('vm.selectType',function () {
        vm.showType={
            name:false,
            time:false,
            serviceState:false,
            followState:false,
            last:false,
            first:false,
            source:false,
            follows:false
        };
        for(i in vm.selectType){
            switch (vm.selectType[i]){
                case 'name':vm.showType.name = true ;break;
                case 'time':vm.showType.time = true ;break;
                case 'followState':vm.showType.followState = true ;break;
                case 'serviceState':vm.showType.serviceState = true ;break;
                case 'last':vm.showType.last = true ;break;
                case 'first':vm.showType.first = true ;break;
                case 'source':vm.showType.source = true ;break;
                case 'follows':vm.showType.follows = true ;break;
            }
        }
    });
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

    //空白非空白
    bs.dis = '0';
    $scope.$watch('bs.dis',function () {
        bs.name_value_type = '';
    });
    // 条件多选select
    vm.setSelect = function(){
       setTimeout(function(){
            if($('#selectType')) {
                $('#selectType').select2({
                    allowClear:true,
                    placeholder: '请选择筛选条件'

                });
            }
        },100);
    };
    vm.setSelect();
    $http.get('/resource/centerList1.shtml').success(function(response){
        vm.items = response.data;
        vm.itemsList = 12345;
        vm.setTableWidth('#show_table');
    });
    // $scope.$watch('vm.page.index',function () {
    //     if(vm.page.index !== 1){
    //         $http.get('/resource/centerList2.shtml').success(function(response){
    //             vm.items = response.data;
    //             vm.itemsList = 12345;
    //         });
    //     }
    //
    // });
    // $scope.$watch('vm.items',function () {
    //     vm.setTableWidth('#show_table');
    // },true);


    //  默认选择今天
    function getDate() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        if(month < 10) {
            month = '0' + month;
        }
        var day = now.getDate();
        if(day < 10) {
            day = '0' + day;
        }
        return year+'-'+month+'-'+day;
    }
    bs.startTime=getDate() + ' 00:00';
    bs.endTime=getDate() + ' 23:59';


    //设置显示字段 默认
    vm.showTabel_default = {
        followState:{checked:true,list:'跟进状态'},
        serviceState:{checked:true,list:'业务状态'},
        source_one:{checked:false,list:'一级渠道'},
        source_two:{checked:false,list:'二级渠道'},
        source_three:{checked:false,list:'三级渠道'},
        source_four:{checked:false,list:'四级渠道'},
        plan:{checked:false,list:'计划'},
        unit:{checked:false,list:'单元'},
        keyword:{checked:false,list:'关键词'},
        page:{checked:false,list:'页面'},
        adver:{checked:false,list:'广告位'},
        k_name:{checked:true,list:'客户姓名'},
        tel:{checked:true,list:'联系电话'},
        area:{checked:true,list:'面积'},
        num_attr:{checked:true,list:'号码归属地'},
        sign_time:{checked:true,list:'报名时间'},
        sign_num:{checked:false,list:'报名次数'},
        connect:{checked:false,list:'交接时间'},
        first_follow_time:{checked:false,list:'首次跟进时间'},
        first_follow_label:{checked:false,list:'首次跟进标签'},
        new_follow_time:{checked:false,list:'最新跟进时间'},
        new_follow_label:{checked:true,list:'最新跟进标签'},
        last_follow_time:{checked:true,list:'下次跟进时间'},
        follow_num:{checked:false,list:'跟进次数'},
        follow_peo:{checked:true,list:'跟进人'},
        follow_date:{checked:false,list:'跟进天数'},
        no_follow_date:{checked:false,list:'未跟进天数'},
        touch:{checked:false,list:'接触率'},
        pre_visit_date:{checked:true,list:'预计上门日期'},
        visit_date:{checked:false,list:'上门日期'},
        order_time:{checked:false,list:'下订时间'},
        un_order_time:{checked:false,list:'退订时间'},
        agree_date:{checked:false,list:'合同签订日期'},
        rm_agree_date:{checked:false,list:'合同解除日期'}
    };
    //   设置显示字段不设定只能点击 X 关闭
     vm.closeSet = function () {
         vm.showTabel =  angular.fromJson($cookies['resourceCenterTableList']) || vm.showTabel_default;
     };
     //   设置显示字段存cookie
     vm.setShowCookie=function () {
         $cookieStore.remove('resourceCenterTableList');
         var expireDate = new Date();
         expireDate.setDate(expireDate.getSeconds() + 100);
         $cookieStore.put("resourceCenterTableList", vm.showTabel,{'expires': expireDate.toUTCString()});
         vm.setTableWidth('#show_table');
     };
     //  页面加载 初始化 设置显示字段
    vm.showTabel =  angular.fromJson($cookies['resourceCenterTableList']) || vm.showTabel_default;

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


    vm.page = {
        size: 200,
        index: 1,
        count:0
    };
    //


    // vm.page.count = Math.ceil( vm.items.length/vm.page.size);
    //   分配
    vm.openDistribute = function (currentId) {
        var modalInstance = $modal.open({
            templateUrl: 'resourceCenterDistribute.html',
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
    //交接
    vm.openConnect =function (currentId) {
        var modalInstance = $modal.open({
            templateUrl: 'resourceCenterCurrent.html',
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
    $(window).unload(function(){$scope.$destroy()});
}])
;