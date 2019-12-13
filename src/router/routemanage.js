import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import link from '@/Components/business/Link.vue'

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
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {path:'link',component:link}
              ]
        }
    ]
  })

  router.beforeEach((to, from, next) => {

    var pathName = to.path;
    if (pathName == ''||pathName=='/') {
      next({ path: '/login' })//跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航
    }
    else
    {
      next();//进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    }
  
  })

  export default router