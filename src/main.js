import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// import Login from './views/Login.vue';
	
Vue.use(ElementUI);
Vue.config.productionTip = false

// router.start(App, '#app')
new Vue({
  router,
	render: h => h(App)
}).$mount('#app')
 