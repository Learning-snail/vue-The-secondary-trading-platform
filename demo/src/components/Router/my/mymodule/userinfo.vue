<template>
  <div class="user-info">
    <img :src="'http://127.0.0.1:3001'+avatar" class="user-header">
    <a href="" class="username">{{username}}</a>
  </div>
</template>

<script>
    export default {
        name: "userinfo",
        data(){
          return {
            avatar:window.localStorage.getItem('avatar'),
            username:window.localStorage.getItem('name')||window.localStorage.getItem('username')
          }
        }
    }
</script>

<style scoped>
  .user-header {
    width: 124px;
    height: 124px;
    border-radius: 66px;
    border: #11cd6e solid 4px;
    display: block;
    margin: 0 auto;
  }
  .username {
    font-weight: bold;
    display: block;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 18px;
  }
</style>
