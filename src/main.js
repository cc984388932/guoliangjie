import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "animate.css";
import "./request.js";

import App from './App.vue';
import router from "./router/index.js";
import vueQriously from 'vue-qriously';

Vue.use(ElementUI);
Vue.use(vueQriously);


new Vue({
	router,
	render: h => h(App)
}).$mount('#app');