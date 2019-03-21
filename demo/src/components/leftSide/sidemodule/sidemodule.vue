<template>
    <div class="sidemodule">
      <router-link :to="{name:'category_list',params:{id:index+1}}">
        {{txt}}
        <i class="iconfont icon-sanjiaoxing" ></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "sidemodule",
        props:['index','txt']
    }
</script>

<style scoped>
a{
  display: block;
  position: relative;
  height: 55px;
  line-height: 55px;
  text-align: left;
  padding-left: 20px;
  border-bottom: #e5e5e5 solid 1px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
}
  a:hover{
    color:#11cd6e
  }
  a:hover i{
    left:90%;
    opacity:1;
  }
  i{
    position: absolute;
    left:50%;
    display:inline-block;
    transform:rotate(-90deg);
    opacity:0;
    transition: .3s;
  }
</style>
