import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import './styles/main.css'


//样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css';
//引入写有需要的组件的文件
import element from './utils/element/index'
Vue.use(element)






// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);




if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  require("./mock");
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
