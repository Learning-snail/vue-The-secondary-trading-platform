<template>
    <div id="search">
      <div class="header-bottom-wrap clearfix">
        <div class="city fl">
          <a href="javascript:;">
            全球
            <i class="iconfont icon-xiajiantou"></i>
          </a>
        </div>
        <searchBox></searchBox>
        <div class="publish fr">
          <router-link :to="{name:iff?'publish':'login'}" class="publish-btn">
            <i class="iconfont icon-pencil-copy"></i>
            发布二货
          </router-link>
        </div>

      </div>
    </div>
</template>

<script>
  import searchBox from './searchBox/searchBox'
    export default {
        name: "search",
        components:{
          'searchBox':searchBox
        },
        data(){
          return {
            iff:window.localStorage.getItem('username')
          }
        },

    }
</script>

<style scoped>
  #search{
    border-bottom: #e5e5e5 solid 1px;
    background-color: #fff;
    min-width: 1100px;
    height: 80px;
  }
  #search .header-bottom-wrap{
    position: relative;
    width: 1100px;
    margin: 0 auto;
    height: 100%;
  }
  .city a{
    display: inline-block;
    height: 35px;
    width: 80px;
    margin-right: 20px;
    margin-top: 20px;
    border: #11cd6e solid 2px;
    line-height: 35px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    color:black;
    font-size: 14px;
  }
  .publish-btn {
    display: inline-block;
    width: 150px;
    height: 39px;
    line-height: 39px;
    color: #fff;
    background-color: #11cd6e;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    font-size: 16px;
  }
  .icon-pencil-copy{
    font-size: 18px;
    font-weight: bold;
  }
  .publish{
    position: absolute;
    right: 0;
  }
</style>
