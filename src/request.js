import Vue from "vue";
import axios from "axios";
import qs from "qs";

	// 使用方法
	// this.$post("/rrpPptCtr/delRrpPpt", postData).then(res=>{
	// 	console.log(res.data);
	// })

Vue.prototype.$post=(url, params)=>{
	return axios.post(url, qs.stringify(params));
}

Vue.prototype.$get=(url)=>{
	return axios.get(url);
};