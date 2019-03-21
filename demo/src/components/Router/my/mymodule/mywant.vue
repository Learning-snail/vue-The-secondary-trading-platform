<template>
  <div>
    <div v-if="!data.length" class="no-data">
      <p>您没有发布任何物品~</p>
    </div>
    <div class="user-main" v-else>
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <div class="list-header">
            <span>时间：{{getTime(item.created)}}</span>
          </div>
          <div class="list-main clearfix">
            <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}" class="goods-images fl"><img :src="'http://127.0.0.1:3001/shopimg/'+item.imgUrl" alt="item.shopname"></router-link>
            <div class="good-info fl">
              <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}" class="goods-title">{{item.shopname}}</router-link>
              <p class="goods-price">￥<span>{{item.price}}</span></p>
            </div>
            <div class="operation fr">
              <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}" class="" >查看详情</router-link>
              <!--<router-link :to="{name:'transition',params:{path:'/user'}}" class="delete-want" @click.native="deleted(item._id)">移除想要</router-link>-->
              <a href="javascript:;" class="delete-want" @click="deleted(item._id)">移除想要</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mywant",
    data(){
      return {
        data:''
      }
    },
    methods:{
      getTime(time){
        return new Date(+new Date(time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
      },
      deleted(id){
        this.$ajax.delete('/want/delete?id='+id)
          .then(res=>{
            this.$router.push({name:'transition',params:{path:'/user/want'}})
          })
      }
    },
    created(){
      let useruid = window.localStorage.getItem('useruid')
      this.$ajax('want/mywant?uid='+useruid)
        .then(res=>{
          this.data= res.data
        })
    }
  }
</script>

<style scoped>
  .user-main{
    margin-top: -21px;
  }
  .user-main ul li {
    background-color: #fff;
    border: #e5e5e5 solid 1px;
    /*margin-bottom: 20px;*/
    height: 170px;
  }
  .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: #e5e5e5 solid 1px;
  }
  .list-header span {
    color: #999;
    font-size: 13px;
  }
  .list-main {
    padding: 10px;
  }
  .goods-images {
    margin-right: 20px;
  }
  .goods-images img {
    width: 100px;
    height: 100px;
    border: #e5e5e5 solid 1px;
  }
  .goods-title {
    display: block;
    margin: 10px 0;
  }
  .goods-price {
    color: #666;
  }
  .goods-price span {
    color: #f40;
    font-size: 20px;
  }
  .operation {
    width: 150px;
    border-left: #e5e5e5 solid 1px;
    height: 70px;
    padding: 15px 0;
  }
  .operation a {
    display: block;
    text-align: center;
    line-height: 25px;
    width: 90px;
    border: #e5e5e5 solid 1px;
    border-radius: 3px;
    margin: 5px auto;
  }
  a{
    color: #000;
  }
</style>
