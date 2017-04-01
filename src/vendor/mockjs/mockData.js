/**
 * Created by wangxb on 2017/3/2.
 */


var data = [];
/**
 * 数据模板
 */
data['/account/login.shtml'] = {
    name: Mock.mock('@cname'),
    date: Mock.mock('@now'),
    url : Mock.mock('@domain')
};

data['/account/logout.shtml'] = {
    name: Mock.mock('@cname'),
    date: Mock.mock('@now'),
    numb: Mock.mock('@integer(10000)')
};
data['/resource/centerList1.shtml'] =function () {
  var arr = [];
  for (i=0;i<200;i++){
      var obj = {
          serviceState: Mock.mock('@cword(3)'),
          followState: Mock.mock('@cword(3)'),
          source_one: Mock.mock('@cword(5)'),
          source_two: Mock.mock('@cword(5)'),
          source_three: Mock.mock('@cword(5)'),
          source_four: Mock.mock('@cword(5)'),
          plan:Mock.mock('@word(2)'),
          unit:Mock.mock('@word(4)'),
          keyword:Mock.mock('@word(5)'),
          page:Mock.mock('@word(6)'),
          k_name:Mock.mock('@cname()'),
          tel:Mock.mock('@word(11)'),
          area:Mock.mock('@word(3)'),
          num_attr:Mock.mock('@city'),
          sign_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          receive:Mock.mock('number|1-10'),
          sign_num:Mock.mock('@word(2)'),
          connect:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          first_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          first_follow_label:Mock.mock('@cword(5)'),
          new_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          last_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          follow_num:Mock.mock('number|1-10'),
          follow_peo:Mock.mock('@cname()'),
          follow_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          no_follow_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          touch:Mock.mock('number|1-100'),
          pre_visit_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          visit_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          order_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          un_order_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          agree_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
          rm_agree_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")')
      };
      arr.push(obj);
  }
  return arr;
}();
data['/resource/centerList2.shtml'] =function () {
    var arr = [];
    for (i=0;i<200;i++){
        var obj = {
            serviceState: Mock.mock('@cword(3)'),
            followState: Mock.mock('@cword(3)'),
            source_one: Mock.mock('@cword(5)'),
            source_two: Mock.mock('@cword(5)'),
            source_three: Mock.mock('@cword(5)'),
            source_four: Mock.mock('@cword(5)'),
            plan:Mock.mock('@word(2)'),
            unit:Mock.mock('@word(4)'),
            keyword:Mock.mock('@word(5)'),
            page:Mock.mock('@word(6)'),
            k_name:Mock.mock('@cname()'),
            tel:Mock.mock('@word(11)'),
            area:Mock.mock('@word(3)'),
            num_attr:Mock.mock('@city'),
            sign_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            receive:Mock.mock('number|1-10'),
            sign_num:Mock.mock('@word(2)'),
            connect:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            first_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            first_follow_label:Mock.mock('@cword(5)'),
            new_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            last_follow_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            follow_num:Mock.mock('number|1-10'),
            follow_peo:Mock.mock('@cname()'),
            follow_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            no_follow_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            touch:Mock.mock('number|1-100'),
            pre_visit_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            visit_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            order_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            un_order_time:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            agree_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
            rm_agree_date:Mock.mock('@datetime("yyyy-MM-dd HH:mm")')
        };
        arr.push(obj);
    }
    return arr;
}();

var response = function(options) {
    var ret = 0;  // 返回对象类型格式, 默认0 成功对象格式, 非0表示失败对象返回格式
    var res = {};
    if(ret == 0){
        res = {
            code: 0,
            status: 'success',
            msg: '成功',
            data: data[options.url]
        }
    }else{
        res = {
            code: 1,
            status: 'fail',
            msg: '失败',
            data: data[options.url]
        }
    }
    return res;
}

Mock.mock(/\/[\w]+\/[\w]+\.shtml/, response);