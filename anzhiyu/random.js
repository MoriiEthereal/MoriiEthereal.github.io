var posts=["2020/03/24/Java使用Dubbo-SpringBoot版/","2020/03/21/Java使用阿里云oss/","2020/02/16/Java使用阿里云短信服务/","2022/11/24/Java实现微信小程序APIV3 支付功能/","2020/04/26/linux部署springboot/","2022/11/24/Java实现微信小程序登录功能/","2019/07/12/nginx使用geoip2限制地区访问/","2020/04/28/nginx实现负载均衡/","2020/03/16/修改Maven仓库为阿里镜像/","2020/01/26/安装DubboAdmin-2-7/","2023/11/27/安装Hexo并部署备份GitHub/","2019/09/24/安装和配置zookeeper/","2020/02/18/宝塔使用git-hooks部署hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };