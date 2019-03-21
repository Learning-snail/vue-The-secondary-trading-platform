<template>
  <div class="list-body">
    <ul class="clearfix">
      <li v-for="(item,index) in cateArr" :key="index">
        <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}">

          <img :src="'http://127.0.0.1:3001/shopimg/'+item.imgUrl" alt="item.shopname">
        </router-link>
        <p>{{item.shopname}}</p>
        <span>￥{{item.price}}</span>
      </li>
    </ul>

  </div>
</template>

<script>

  export default {
    name: "layout",
    props:['cateArr'],
    data(){
      return {
      }
    },
    created(){

    }
  }
</script>

<style scoped>
  .list-body{
     width: 665px;
   }
  ul{
    width: 680px;
  }
  .list-body li {
    width: 213px;
    border: #e5e5e5 solid 1px;
    float: left;
    margin-right: 11px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  ul li:hover{
    border: #11cd6e solid 1px;
    transition: all .3s;
    box-shadow: #11cd6e 0 1px 5px
  }
  ul li a{
    width: 100%;
    height: 100%;
  }
  ul li img{
    width: 100%;
    height: 209.5px;
  }
  ul li p{
    color: #333;
    text-decoration: none;
    line-height: 28px;
    padding: 0 5px;
    overflow: hidden;
    height: 25px;
    cursor: pointer;
  }
  ul li p:hover{
    color: #f40;
  }
  ul li span{
    color: #f40;
    font-weight: bold;
    padding-left: 5px;
    line-height: 25px;
  }
</style>
