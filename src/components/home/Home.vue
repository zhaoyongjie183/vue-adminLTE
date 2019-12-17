<template>
    <div class="wrapper">
        <WebHeader />
        <WebMenu />
        <WebBody />
        <WebFooter />
        <div class="control-sidebar-bg"></div>
    </div>
</template>
<script>

import WebHeader from "../layout/Header";
import WebMenu from "../layout/Menu";
import WebFooter from "../layout/Footer";
import WebBody from "../layout/Body";

export default {
  inject:['reload'],
  mounted(){
    //this.$router.go(0);
    //this.reload();
  },
  methods:{
    reload(){
      console.info("hahha");
      this.reload();
    }
  },
  components: {
    WebHeader,
    WebMenu,
    WebFooter,
    WebBody
  }
}
</script>

<style>
.wrapper {
  height: 100%;
  background: #e9ecef !important;
}
</style>
