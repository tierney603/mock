import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  require("./mock");
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
