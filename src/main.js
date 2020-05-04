import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'
// 引入 自定义指令
import GoTop from './directives/gotop/index.js'

Vue.config.productionTip = false

// 全局注册自定义指令
Vue.directive('gotop', GoTop)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
