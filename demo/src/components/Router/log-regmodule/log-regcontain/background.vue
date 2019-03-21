<template>
  <div id="header">
    <a href="/" class="logo"></a>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  #header {
    position: relative;
    width: 100%;
    height: 323px;
    background-color: #11cd6e;
  }
  .logo {
    position: absolute;
    z-index: 9999;
    top: 70px;
    left: 136px;
    display: inline-block;
    width: 253px;
    height: 42px;
    background: url('../../../../../static/img/new-logo.png') left top no-repeat;
    background-size: 100%;
  }
</style>
