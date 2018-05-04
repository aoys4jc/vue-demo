<template>
<mt-tabbar v-model="selected">
  <mt-tab-item id="newest">
    <img slot="icon" src="./assets/100x100.png">
    最新
  </mt-tab-item>
  <mt-tab-item id="game">
    <img slot="icon" src="./assets/100x100.png">
    游戏
  </mt-tab-item>
  <mt-tab-item id="article">
    <img slot="icon" src="./assets/100x100.png">
    文章
  </mt-tab-item>
  <mt-tab-item id="mine">
    <img slot="icon" src="./assets/100x100.png">
    我的
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
export default {
  data(){
      return {
            fixed:true
      }
  }
}
</script>

