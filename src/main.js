import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import $ from 'jquery';
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
window.jQuery = $;
window.$ = $;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
