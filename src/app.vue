<template>
  <div id="app">
      <!-- <img src="./assets/logo.png"> -->
   <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
   <transition name="fade" mode="out-in">
        <router-view v-if="isRouterAlive"></router-view>
      </transition>
  
  </div>
  
</template>
<script>
export default {
  name: 'app',
   provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style>
html, body {
  height: 100% !important;
  min-height: 100% !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%; 
}

</style>