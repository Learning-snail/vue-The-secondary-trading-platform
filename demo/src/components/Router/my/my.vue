<template>
    <div>
      <hdNav></hdNav>
      <div id="main">
        <div class="left">
          <Userinfo></Userinfo>
          <img src="../../../../static/img/user.png" alt="">
          <div class="sider-nav">
            <Left path="/user/admin" word="用户管理" icon="icon-shangpin"></Left>
            <Left path="/user/index" word="我发布的" icon="icon-dingdan"></Left>
            <Left path="/user/want" word="我想要的" icon="icon-fox"></Left>
            <Left path="/user/message" word="我的留言" icon="icon-liuyan"></Left>
            <Left path="/user/checkinfo" word="个人信息" icon="icon-wodedangxuan"></Left>
          </div>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
  import Left from './mymodule/left'
  import Userinfo from './mymodule/userinfo'
    export default {
      name: "my",
      components:{
        Userinfo,
        Left
      }

    }
</script>

<style scoped>
  #main {
    display: flex;
    width: 1100px;
    margin: 20px auto;
    justify-content: space-between;
  }
.left{
  width: 180px;
  background-color: #fff;
  padding: 20px;
  border: #e5e5e5 solid 1px;
  min-height: 500px;
}
  .left img{
    width: 100%;
  }
  .sider-nav {
    border-top: #e5e5e5 solid 1px;
    margin-top: 15px;
    padding: 10px 0;
  }
  .right{
    background: #fff;
    padding-top: 20px;
    border: #e5e5e5 solid 1px;
    width: 860px;
  }
</style>
