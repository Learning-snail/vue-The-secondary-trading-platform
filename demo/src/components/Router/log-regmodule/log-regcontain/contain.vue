<template>
    <div class="contain">
      <div class="container">
        <Nav></Nav>
      </div>
    </div>
</template>

<script>
  import Nav from '../log-regNav/log-regNav'
    export default {
        name: "contain",
        components:{
          'Nav':Nav
        }
    }
</script>

<style scoped>
  .contain{
    width: 100%;
  }
  .container{
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-top: 1px solid #fff;
    background-color: #fff;
  }
</style>
