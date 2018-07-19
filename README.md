#PWA project

PWA 其中有三个关键的技术：
1、Service Worker（服务工厂）
2、Manifest （应用清单）
3、Push Notification（推送通知）

一：Service Worker
1、支持：目前只能在 HTTPS 环境下才能使用SW
2、事件机制：install, activate, message, Functional events: fetch, sync, push
3、功能
    后台数据的同步
    从其他域获取资源请求
    接受计算密集型数据的更新，多页面共享该数据
    客户端编译与依赖管理
    后端服务的hook机制
    根据URL模式，自定义模板
    性能优化
    消息推送
    定时默认更新
    地理围栏