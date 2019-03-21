<template>
    <div>
      <div class="right fr">
        <div class="sidebar-header">推荐二货</div>
        <ul class="sidebar-list">
          <li v-for="(item,index) in cateArr" :key="index">
            <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}" class="sidebar clearfix">
              <img class="sidebar-image fl" :src="'http://127.0.0.1:3001/shopimg/'+item.imgUrl" alt="item.shopname">
              <p class="sidebar-title">{{item.shopname}}</p>
              <p class="sidebar-price">￥{{item.price}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "right",
      props:['cateArr'],
      data(){
        return {

        }
      },

    }
</script>

<style scoped>
.right{
  width: 280px;
  border: #e5e5e5 solid 1px;
  background-color: #fff;
  border-radius: 5px;
}
.sidebar-header {
  line-height: 50px;
  border-bottom: #e5e5e5 solid 1px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background: #11cd6e;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
}
.sidebar-list li {
  padding: 10px;
  width: 260px;
  height: 100px;
  border-bottom: #e5e5e5 solid 1px;
}
.sidebar {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
}
.sidebar .sidebar-image {
  display: block;
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.sidebar .sidebar-price {
  color: #f40;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
