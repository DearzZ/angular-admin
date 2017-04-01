/**
 * Created by dear on 3/1/17.
 */
module.exports = {
    options: {
        port: 1024,
        hostname: '127.0.0.1', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35729  //声明给 watch 监听的端口
    },
    server: {
        options: {
            open: true, //自动打开网页 http://
            base: [
                //当前的severHttp服务目录;
                "src/"
                //主目录
            ]
        }
    }
}