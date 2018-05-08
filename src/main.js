import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from '../store/index.js';//导入状态库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Vuex);
Vue.use(require('vue-resource'));//引用ajax库
Vue.use(VueRouter);

import App from '../components/App.vue'
import CustomCascader from '../components/Cascader.vue'
import CustomTimePicker from '../components/TimePicker.vue'
import CustomButton from '../components/Button.vue'
import CustomBottomNav from '../components/BottomNav.vue'

import Ticket from "../components/Ticket.vue";
import DownloadApp from "../components/DownloadApp.vue";
import TicketBody from "../components/TicketBody.vue";
import TicketStartCity from "../components/TicketStartCity.vue";
import TicketEndCity from "../components/TicketEndCity.vue";
import TicketResult from "../components/TicketResult.vue";
import TicketPay from "../components/TicketPay.vue";

const routes = [{
	path: '/',
	name:"home",
	component: Ticket,
	children:[
		{
			path:"",
			name:"ticketbody",
			component:TicketBody
		},
		{
			path:"/startcity",
			name:"ticketstartcity",
			component:TicketStartCity
		},
		{
			path:"/endcity",
			name:"ticketendcity",
			component:TicketEndCity
		},
		{
			path:"/result",
			name:"ticketresult",
			component:TicketResult
		},
		{
			path: '/ticketpay',
			name:"ticketpay",
			component: TicketPay
		},
		{
			path:"*",
			name:"*ticketbody",
			component:TicketBody
		}
	]
},
{
	path:"*",
	name:"all",
	redirect:"/home",
}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// router.beforeEach((to, from, next) => {
// 	if(from.name==="home"){
// 		store.commit("CHANGE_HEADER",false);
// 	}
// 	else{
// 		store.commit("CHANGE_HEADER",true);
// 	}
//   console.log("to",to);
//   console.log("from",from);
//   next();
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store,
}).$mount('#app')

// new Vue({
//   el: '#app',
//   components:{
//     'custom-app':App,
//     'custom-cascader':CustomCascader,
//     'custom-time':CustomTimePicker,
//     'custom-button':CustomButton,
//     'custom-buttom-nav':CustomBottomNav
//   }
// })