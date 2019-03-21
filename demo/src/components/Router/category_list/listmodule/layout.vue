<template>
    <div>
      <ul class="clearfix">
        <li v-for="(item,index) in cateArr" :key="index">
          <router-link :to="{name:'shopdetail',params:{id:(item.imgUrl)}}">

            <img :src="'http://127.0.0.1:3001/shopimg/'+item.imgUrl" alt="item.shopname">
          </router-link>
          <p>{{item.shopname}}</p>
          <span>￥{{item.price}}</span>
        </li>
      </ul>
      <Pagination :maxNum="maxNum" path="category_list" :params="params"></Pagination>
    </div>
</template>

<script>
  import Pagination from '../../../home/pagination'
    export default {
        name: "layout",
        props:['arr'],
        components:{
          Pagination
        },
        data(){
          return {
            cateArr:[],
            maxNum:1,
            params:'',
            p:'',
          }
        },
      methods: {
        ajax() {
          this.p = this.$route.query.p || 1
          this.params = this.$route.query.id
          let cateName = this.arr[this.$route.params.id]
          this.$ajax.post('/shop/shopget', {'cateName': cateName,'p':this.p})
            .then(res => {
              this.cateArr = res.data.data
              this.maxNum = Math.ceil(res.data.maxNum / 15) * 10
            })
        }
      },
        created(){
          this.ajax()
        },
      watch:{
        '$route'(to,from){
          if (to.fullPath !== from.fullPath) {
            this.ajax()
            window.scrollTo(0,0)
          }
        }
      }

    }
</script>

<style scoped>
.clearfix{
  padding-top: 20px;
  width: 1115px;
}
 ul li{
    width: 209.5px;
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
    width: 209.5px;
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
