<template>
  <div id="app">
      <!-- <img src="./assets/logo.png"> -->
   <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view :key="$route.fullPath"></router-view>
  </div>
  
</template>
<script>
export default {
  name: 'app'
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