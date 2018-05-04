<template>
     <mt-button @click.native="handleClick">按钮</mt-button>
</template>

<script>
  export default {    
    methods: {
        handleClick: function() {
          this.$toast('Hello world!')
        }
      }
  };
</script>