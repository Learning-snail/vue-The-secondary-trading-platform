<template>
    <div>
      <router-link :to="{path}" active-class="active">
        <i :class="icon" class="iconfont"></i>{{word}}</router-link>
    </div>
</template>

<script>
    export default {
      name: "left",
      props:['word','path','icon']
    }
</script>

<style scoped>
  div{
    display: flex;
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
.active{
  background-color: #11cd6e;
  color: #fff;
}
  a{
    display: block;
  width: 100%;
  }
  .iconfont{
    font-size: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
  a:hover{
    background-color: #e5e5e5;
    transition: all .3s;
    color: #333;
  }
</style>
