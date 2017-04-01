/**
 * Created by Administrator on 2017/2/20.
 */
/* Controllers */
//   resource_center.html controller
app.controller('visitCenterCtrl', ['$scope','$cookies','$cookieStore','$modal','toaster','$http',function($scope,$cookies,$cookieStore,$modal,toaster,$http) {
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
            k_state:false,
            last:false,
            first:false,
            source:false,
            follows:false
        };
        for(i in vm.selectType){
            switch (vm.selectType[i]){
                case 'name':vm.showType.name = true ;break;
                case 'time':vm.showType.time = true ;break;
                case 'k_state':vm.showType.k_state = true ;break;
                case 'last':vm.showType.last = true ;break;
                case 'first':vm.showType.first = true ;break;
                case 'source':vm.showType.source = true ;break;
                case 'follows':vm.showType.follows = true ;break;
            }
        }
    });
    //空白非空白
    bs.dis = '0';
    bs.name_value_type = '';
    $scope.$watch('vm.dis',function () {
        bs.name_value_type = '';
    });
    // 条件多选select
    vm.setSelect = function(){
        setTimeout(function(){
            if($('#selectType')) {
                $('#selectType').select2({
                    tags: "true",
                    allowClear:true,
                    placeholder: '请选择筛选条件'

                });
            }
        },100);
    };
    vm.setSelect();

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
    //  生成 随机数据 //  生成 随机数据
    vm.items = [];
    vm.distributeList = [];
    var MAX_NUM = 10 * 162;
    function rand(min, max) {
        return min + Math.round(Math.random() * (max-min));
    }
    for (var i = 0; i < MAX_NUM; ++i) {
        var name_num = rand(0,10);
        var arr = ['刘洲成','龚祥顺','于正','潘慧如','苏小妹','张力尹','张丹露','许小行','王子文','奥利维亚','巴勒莫','埃杜瓦多','克鲁兹','蒂莫西','斯波','乔许','葛洛班','友兰达','梦露','安倍麻美'];

        vm.items.push({
            k_state:rand(0, 100),
            source_one:rand(0, 100 * 1000 * 100),
            source_two:rand(0, 100 * 1000 * 10),
            source_three:rand(0, 100 * 1000),
            source_four:rand(0, 10 * 1000),
            plan:rand(0, 1000),
            unit:rand(0,1000 * 1000),
            keyword:rand(0, 10 * 1000 * 1000),
            page:rand(0, 1000 * 1000),
            adver:rand(0, 100  * 1000),
            k_name:rand(0, 10 * 1000 * 1000),
            tel:rand(0, 100 * 100 * 100),
            area:rand(0, 100 * 1000 * 10),
            num_attr:rand(0, 100 * 1000 * 100),
            sign_time:rand(0, 100 * 1000 * 10),
            sign_num:rand(0, 100 * 1000 * 10),
            connect:rand(0,199),
            first_follow_time:rand(0, 100 * 1000),
            first_follow_label:rand(0,  1000),
            new_follow_time:rand(0, 1000 * 1000),
            new_follow_label:rand(0, 1000 * 1000),
            last_follow_time:rand(0, 10 * 1000),
            follow_num:rand(0, 100 * 10000),
            follow_peo:rand(0, 100 * 1000),
            follow_date:rand(0, 100 * 100)
        });
        vm.distributeList.push({
            id:i+1,
            name:arr[name_num]
        });
    }
    vm.page.count = Math.ceil( vm.items.length/vm.page.size);

    // vm.page.count = Math.ceil( vm.items.length/vm.page.size);
    //   分配
    vm.openDistribute = function (currentId) {
        var modalInstance = $modal.open({
            templateUrl: 'visitCenterDistribute.html',
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
            templateUrl: 'visitCenterCurrent.html',
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
    }
    $http.get('/account/login.shtml').success(function(response){console.log(response)});
    $(window).unload(function(){$scope.$destroy()})
}])
;