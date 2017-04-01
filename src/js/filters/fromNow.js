'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
}).filter('paging', function() {// paging用来对前端数据进行分页
        return function (items, index, pageSize) {
            if (!items)
                return [];

            var offset = (index - 1) * pageSize;
            return items.slice(offset, offset + pageSize);
        }
}).filter('size', function() {  //  size用来在页面中获取过滤后的数组长度
    return function (items) {
        if (!items)
            return 0;

        return items.length || 0
    }
}).filter('orderClass', function() {//orderClass用来生成排序图标
    return function (direction) {
        if (direction === -1)
            return "glyphicon-chevron-down";
        else
            return "glyphicon-chevron-up";
    }
}).filter('toNumber',function () {
    return function (str) {
        return parseInt(str);
    }
}).filter('pagingCopy', function() {// paging用来对前端数据进行分页
    return function (items, pageSize) {
        if (!items)
            return [];

        return items.slice(0, pageSize);
    }
});