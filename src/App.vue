<template>
<my-navbar></my-navbar>
  <div  class="app"> 
<router-view></router-view>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="scss" >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .app {
    margin: 20px 100px
  }
</style>