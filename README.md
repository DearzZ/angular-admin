# angular-admin
#BOSS静态文件


### 开发

* 后端开发
```shell
> npm run dev
```

* 发布测试
```shell
> npm run dist
```

* 发布线上
```shell
> npm run dist
```
###前端开发

####环境部署
```shell
1.官网安装NodeJS。
2.安装Bower和Grunt.
$ npm install -g bower grunt-cli
```
####开发流程
* 首次运行
```shell
$ cd /path/to/boss-static
$ npm install 
```

	
* 启动本地服务
```shell
$ cd /path/to/boss-static
$ grunt

本地访问---http://localhost:1024/
```
* 静态文件结构
```shell
前端文件目录 /src
│──index.html                 入口
│
│──css                        存放css样式代码
│   │──less                   页面使用的样式代码，通过grunt编译---改变样式修改this
│   │──app.css                grunt编译less生成，不能直接修改
│──js                         存放所有业务逻辑代码 
│   │——lazyload               angular $oclazyload模块 
│   │——app.js                 定义ng需要加载的模块 
│   │——main.js                定义ng的全局配置信息 
│   │——config.router.js       ng的路由器 
│
│──tpl                        存放所有页面模版 
│   │——blocks                  页面框架（头、尾、侧边栏…) 
│——vendor                     存放所有第三方模块
```


> An unfinished project,So disappointed.
