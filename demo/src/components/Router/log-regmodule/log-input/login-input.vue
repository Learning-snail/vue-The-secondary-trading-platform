<template>
    <div class="contain">
      <div class="left fl">
        <Loding :iff.sync="loding" :data="data"></Loding>
        <form action="javascript:;">
          <div class="form-item">
            <label class="label">用户名</label>
            <div class="input-inline">
              <input class="input"  type="text" name="username" required="required" placeholder="请输入用户名" ref="username">
            </div>
          </div>
          <div class="form-item">
            <label class="label">密码</label>
            <div class="input-inline">
              <input class="input"  type="password" name="password" required="required" placeholder="请输入密码" ref="password">
            </div>
          </div>
          <div class="form-item">
            <div class="input-block">
              <button class="btn" @click="submit">立即提交</button>
              <button class="btn btn-primary" type="reset">重置</button>
            </div>
          </div>
        </form>
      </div>
      <div class="right  fr">
        <p>没有淘二淘账号：</p>
        <router-link :to="{name:'register'}">立即注册</router-link>
      </div>
    </div>
</template>

<script>
  import loding from '../login-register/index'
    export default {
      name: "login-input",

      components:{
        'Loding':loding
      },
      data(){
        return {
          data:'',
          loding:false
        }
      },
      methods:{
        submit(){
          this.$ajax.post("/user/login",{
            'username':this.$refs.username.value,
            'password':this.$refs.password.value
          })
            .then(res=>{
              if( res.data.status===1){
                window.localStorage.setItem('username',res.data.session.username)
                window.localStorage.setItem('avatar',res.data.session.avatar)
                window.localStorage.setItem('useruid',res.data.session.uid)
                window.localStorage.setItem('name',res.data.session.name)
              }
              this.data=res.data.message
            })
          this.loding=true
        }
      }
    }
</script>

<style scoped >
  .contain{
    width: 556px;
    margin: -168px auto 0 auto;
    padding: 50px 47px 60px 57px;
    background-color: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.09);
    box-shadow: 0 0 5px rgba(0,0,0,.09);
    display: table;
    position: relative;
    z-index: 1;
  }
  form{
    height: auto;
  }
  .form-item {
    display: flex;
    margin-bottom: 15px;
    clear: both;
    height: 60px;
  }
  .label{
    float: left;
    display: block;
    padding: 9px 15px;
    width: 100px;
    font-weight: 300;
    line-height: 20px;
    text-align: right;
    font-size: 20px;
  }

  .input-inline {
    float: left;
    width: 190px;
    height: 40px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .input-inline:hover{
    border: 1px solid #969896;
  }
  input{
    width: 190px;
    outline: none;
    border: none;
    text-indent: 1em;
    line-height: 40px;
    font-size: 16px;
  }
  .input-block {
    margin-left: 110px;
    min-height: 36px;
  }
  .btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .btn {
    margin-left: 10px;
  }
  .btn-primary {
    border: 1px solid #C9C9C9;
    background-color: #fff;
    color: #555;
  }
  .btn-primary:hover{
    border: 1px solid #009688;
  }
  .left {
    width: 300px;
    padding-right: 30px;
    border-right: #eee solid 1px;
  }
  .right {
    margin-top: 65px;
    width: 145px;
    padding-left: 80px;
  }
  .right p {
    color: #666;
  }
  .right a {
    color: #11cd6e;
    font-size: 16px;
    line-height: 50px;
  }
</style>
