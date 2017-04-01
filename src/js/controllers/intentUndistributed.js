/**
 * Created by dear on 3/2/17.
 */
app.controller('intentUndistributeCtrl', ['$scope','$cookies','$cookieStore','$modal','toaster','$http',function($scope,$cookies,$cookieStore,$modal,toaster,$http) {
    //  vm -----  页面控制对象；；；；；；；；；；    bs  传输数据对象
    var vm = $scope.vm = {};
    var bs = $scope.bs = {};


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
    var MAX_NUM = 10 * 11;
    function rand(min, max) {
        return min + Math.round(Math.random() * (max-min));
    }
    for (var i = 0; i < MAX_NUM; ++i) {
        var id = rand(0, MAX_NUM);
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
        });
        vm.distributeList.push({
            id:i+1,
            name:arr[name_num]
        });
    }
    vm.page.count = Math.ceil( vm.items.length/vm.page.size);

    $http.get('/account/login.shtml').success(function(response){console.log(response)});
    $(window).unload(function(){$scope.$destroy()})
}])
;