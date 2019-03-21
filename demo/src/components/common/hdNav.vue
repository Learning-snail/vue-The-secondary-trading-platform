<template>
    <div id="header">
      <div class="header-wrap ">
        <router-link :to="{name:'index'}" class="logo fl">
          <img src="../../../static/img/new-logo.png" alt="淘二淘-大学生二手网 是一个为全国高校在校大学生提供的一个安全、方便、快捷的二手闲置物品交易平台和校园二手信息发布网站。">
        </router-link>
        <ul class="nav fl">
          <Skip name="index" title="首页"></Skip>
          <a href="https://youhui.pinduoduo.com">拼多多</a>
          <a href="https://ai.taobao.com">爱淘宝</a>
        </ul>
        <div class="nav-right fr" v-if=!username>
          <Skip name="login" title="登录"></Skip>
          <Skip name="register" title="注册"></Skip>
        </div>
        <div class="nav-right fr" v-else>
          <router-link :to="{name:'usermy'}" class="user">
            <img :src="'http://127.0.0.1:3001'+avatar" alt="" class="avatar">
            <span>{{username}}</span>
          </router-link>
          <Skip name="transition" title="退出" @click.native="loginout"></Skip>
        </div>
      </div>
    </div>
</template>

<script>
  import skip from './hd-skip/skip'

    export default {
        name: "hdNav",
      data(){
          return {
            username:'',
            avatar:''
          }
      },
      methods:{
        loginout(){
          window.localStorage.setItem('username','')
          window.localStorage.setItem('avatar','')
          window.localStorage.setItem('uid','')
          window.localStorage.setItem('useruid','')
          window.localStorage.setItem('name','')
        }
      },
      components:{
          'Skip':skip
      },
      created(){
        this.username=window.localStorage.getItem('name')||window.localStorage.getItem('username')
        this.avatar=window.localStorage.getItem('avatar')
      }
    }
</script>

<style scoped>
  #header {
    background-color: #11cd6e;
    min-width: 1100px;
    height: 60px;
  }
  .header-wrap {
    width: 1100px;
    margin: 0 auto ;
    height: 100%;
  }
  .header-wrap .logo {
    position: relative;
    display: block;
    width: 25%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .logo img {
    position: absolute;
    top: 0;
    left: 0;
    width: 253px;
    height: 42px;
    margin-top: 9px;
  }
  .header-wrap .nav {
    margin-left: 20px;
    transition: .3s;
  }
  .header-wrap .nav a{
    color: #fff;
    font-size: 17px;
    padding: 0 20px;
    line-height: 60px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
  }
  .header-wrap .nav a:hover{
    background-color: rgba(255,255,255,.2);
  }
  .fr a.user{
    display: inline-block;
    min-width: 140px;
    height: 60px;
    color: #fff;
    font-size: 17px;
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
  }
  .fr a.user:hover{
    background-color: rgba(255,255,255,.2);
  }
  .fr img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: bottom;
  }

</style>
