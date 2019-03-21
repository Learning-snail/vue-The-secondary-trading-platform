<template>
  <div>
    <!--<hdNav></hdNav>-->
    <!--<hdseacher></hdseacher>-->
    <background></background>
    <reginp></reginp>
  </div>
</template>

<script>
  import contain from '../log-regmodule/log-regcontain/contain'
  import reginp from '../log-regmodule/reg-input/reg-input'
  import background from '../log-regmodule/log-regcontain/background'
    export default {
        name: "register",
      components:{
        contain,
        reginp,
        background
      }
    }
</script>

<style scoped>

</style>
