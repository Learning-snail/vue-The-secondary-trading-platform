<template>
    <div class="search-wrap fl">
      <div class="search">
        <input v-model=txt type="text" class="keywords" placeholder="请输入关键词">
        <!--<router-link :to="{name:'search',query:{keywords:txt}}" class="search-btn search-normal-btn">搜索</router-link>-->
        <a href="javascript:;" class="search-btn search-normal-btn" @click="search">搜索</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "searchBox",
        data(){
          return {
            txt:''
          }
        },
      methods:{
        search(){
          if( this.txt ){
            this.$router.push({name:'transition',params:{path:'search',keywords:this.txt}})
          }else{
            this.$message('请输入关键词')
          }
        }
      }
    }
</script>

<style scoped>
.search-wrap{
  height: 100%;
}
  .search{
    height: 42%;
    width: 400px;
    border: #11cd6e solid 2px;
    border-radius: 5px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
  }
  .search .keywords {
    width: 295px;
    display: inline-block;
    height: 35px;
    border: none;
    padding-left: 5px;
  }
  input{
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
  }
.search .search-btn {
  display: inline-block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 35px;
  background-color: #11cd6e;
  color: #fff;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
  font-size: 17px;
}
</style>
