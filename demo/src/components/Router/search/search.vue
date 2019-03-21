<template>
    <div>
      <hdNav></hdNav>
      <hdseacher></hdseacher>
      <div id="main">
        <div class="count">淘二淘 为您找到相关结果
          {{data.length}} 个</div>
        <Layout :cateArr="data"></Layout>
        <Pagination :maxNum="maxNum" path="search" :params="params"></Pagination>
      </div>
    </div>
</template>

<script>
  import Layout from '../../home/layout'
  import Pagination from '../../home/pagination'
    export default {
        name: "search",
      components:{
        Layout,
        Pagination
      },
        data(){
          return {
            data:'',
            maxNum:1,
            params:''
          }
        },
      methods:{
          ajax(){
            let p = this.$route.query.p||1
            this.params = this.$route.query.keywords
            this.$ajax.get('/shop/search?keywords='+this.params+'&p='+p)
              .then(res=>{
                this.data=res.data.data
                this.maxNum = Math.ceil(res.data.maxNum / 15) * 10
                console.log(res.data.maxNum,Math.ceil(res.data.maxNum / 15));
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
          }
        }
      }
    }
</script>

<style scoped>
  #main {
    width: 1100px;
    margin: 20px auto;
  }
  .count {
    background: #fff;
    margin-bottom: 10px;
    border: #e5e5e5 solid 1px;
    line-height: 35px;
    padding: 0 20px;
    font-size: 12px;
    color: #999;
  }
</style>
