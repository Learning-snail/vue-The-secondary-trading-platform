<template>
    <div>
      <ul>
        <li v-for="(item,index) in userlist" :key="index">
          <img :src="'http://127.0.0.1:3001'+item.avatar" alt="item.shopname">
          <div class="userinfo">
        <span>账号：{{item.username}}</span>
        <span>昵称：{{item.name||'无'}}</span>
          </div>
          <div class="operation fr">
            <a href="javascript:;" class="delete-want" @click="deleted(item._id)">删除用户</a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data(){
          return {
            userlist:''
          }
        },
        created(){
          this.$ajax.get('/user/users')
            .then(res=>{
              this.userlist = res.data.data
              console.log(res.data.data);
            })
        }
    }
</script>

<style scoped>
   ul li {
    display: flex;
    background-color: #fff;
    border: #e5e5e5 solid 1px;
    height: 110px;
    justify-content: space-between;
     padding: 10px 20px 0;
  }
   ul li img {
     width: 100px;
     height: 100px;
     border-radius: 50%;

   }
   .userinfo{
     min-width: 300px;
     line-height: 110px;
   }
   .userinfo span{
     margin-left: 20px;
   }
   .operation {
     width: 150px;
     border-left: #e5e5e5 solid 1px;
     height: 70px;
     padding-top: 35px;
   }
   .operation a {
     display: block;
     text-align: center;
     line-height: 25px;
     width: 90px;
     border: #e5e5e5 solid 1px;
     border-radius: 3px;
     margin: 5px auto;
     color: #000;
   }
</style>
