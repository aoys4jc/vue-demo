import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import CustomCascader from './Cascader.vue'
import CustomTimePicker from './TimePicker.vue'

Vue.use(ElementUI)
Vue.use(MintUI)

new Vue({
  el: '#app',
  components:{
    'custom-app':App,
    'custom-cascader':CustomCascader,
    'custom-time':CustomTimePicker
  }
})