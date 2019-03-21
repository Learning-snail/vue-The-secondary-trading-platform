<template>
    <div>
      <!--<hdNav></hdNav>-->
      <!--<hdseacher></hdseacher>-->
      <!--<contain></contain>-->
      <background></background>
      <loginp></loginp>
    </div>
</template>

<script>
  import contain from '../log-regmodule/log-regcontain/contain'
  import loginp from '../log-regmodule/log-input/login-input'
  import background from '../log-regmodule/log-regcontain/background'
    export default {
        name: "login",
        components:{
          contain,
          loginp,
          background
        }
    }
</script>

<style scoped>

</style>
