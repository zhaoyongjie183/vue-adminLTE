import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router/routemanage'
import 'bootstrap'
import 'admin-lte'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'nprogress/nprogress.css'


Vue.use(Element)

// vue.config.productiontip=false
// productionTip
// 2.2.0 新增
// 类型： boolean
// 默认值： true
// 用法：
// 设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

