import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "animate.css";
import "./request.js";

import App from './App.vue';
import router from "./router/index.js";

Vue.use(ElementUI);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');