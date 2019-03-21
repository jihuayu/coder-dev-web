import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './tools/bootstrap-3.3.7-dist/css/bootstrap-theme.css'
import './tools/bootstrap-3.3.7-dist/css/bootstrap.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
