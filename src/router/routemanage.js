import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import Dashboard from '@/Components/business/Dashboard.vue'

Vue.use(Router)

var router = new Router({
    mode: 'history',  //去掉url中的#
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
              title: '首页',
              requireAuth: true
            },
            children:[
                {
                  path:'dashboard',
                  component:Dashboard, 
                  meta: {
                    title: '看板',
                    requireAuth: true
                  }
                }
              ]
        }
    ]
  })

  //注册一个全局前置守卫
  router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem('user');
    var pathName = to.path;
    NProgress.start();//进度条插件
    //debugger;
    console.info("路由地址"+pathName);
    console.info("临时变量session的值："+sessionStorage.getItem('user'));
    if(to.matched.some(record => record.meta.requireAuth)){
      //路由元信息requireAuth:true则不做登录校验
      if(user!=null&&user!=undefined){//判断用户是否登录
        next()
    }else{
        if(to.path==="/login"){
          sessionStorage.removeItem('user');
            next()
        }else{
            next({path:"/login" })
        }
    }
  }else{
    //确保一定要调用 next()
    //进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    //必须执行next()这个方法，因为如果不执行的话，会出现死循环，会一直调用全局前置守卫方法
    next()
  }
  
  })
//注册全局后置钩子
  router.afterEach(transition => {
    NProgress.done();
});

  export default router