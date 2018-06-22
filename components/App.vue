<template>
  <div id="app">
    <mt-header fixed title="标题">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h3>{{ msg }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="body">
			<transition 
			enter-active-class="fadeIn"
			leave-active-class="fadeOut">
				<router-view></router-view>
			</transition>
    </div>
    <custom-bottomnav></custom-bottomnav>
  </div>  
</template>

<script type="text/babel">
import CustomBottomNav from '../components/BottomNav.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Aoys的博客'
    }
  },
  components:{
		"custom-bottomnav":CustomBottomNav,
	}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 30px 0 0 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
