<template>
    <div class="midbottom">
      <div class="list-header">
        <a href="/" :class="params?'':'active'">推荐</a>
        <a href="/?n=true" :class="params?'active':''">最新</a>
        <router-link :to="{name:iff?'publish':'login'}" class="fr">
          <i class="iconfont icon-pencil-copy"></i>
          发布信息
        </router-link>
      </div>
      <div class="list-body">
        <Layout :cateArr="data"></Layout>
        <Pagination :maxNum="maxNum" :params="params" :p="p" path="index"></Pagination>
      </div>
    </div>
</template>

<script>
  import Layout from './layout'
  import Pagination from './pagination'
    export default {
      name: "middlebottom",
      components:{
        Layout,
        Pagination
      },
      data(){
        return {
          iff:window.localStorage.getItem('username'),
          data:[],
          params:'',
          maxNum:1,
          p:1
        }
      },
      methods:{
        ajax(){
          this.params=this.$route.query.n||'';
          this.p=this.$route.query.p||1
          this.$ajax.get('shop/alldetail?n='+this.params+'&p='+this.p)
            .then(res=>{
                this.data=res.data.data
              this.maxNum=Math.ceil(res.data.maxNum/15)*10
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
.midbottom{
  margin: 20px 0;
}
.list-header {
  line-height: 50px;
  padding-left: 20px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  border-bottom: #e5e5e5 solid 1px;
}
.list-header a.active {
  border-bottom: #11cd6e solid 3px;
}
.list-header a {
  padding: 0 10px;
  text-decoration: none;
  color: #333;
  display: inline-block;
  font-size: 16px;
}
</style>
