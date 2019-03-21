<template>
  <div class="contain">
      <div class="left fl">
        <Loding :iff.sync="loding" :data="data"></Loding>
        <form action="javascript:;" >
          <div class="form-item">
            <label class="label">用户名</label>
            <div class="input-inline" >
              <input class="input"  type="text" name="username" ref="username" required="required" placeholder="请输入用户名" @blur="leave('username',0)" autofocus="autofocus">
            </div>
            <p class="tip username">用户名以字母开头长度为6-16位</p>
          </div>
          <div class="form-item">
            <label class="label">密码</label>
            <div class="input-inline">
              <input class="input"  type="password" name="password" ref="password" required="required" placeholder="请输入密码"  @blur="leave('password',1)">
            </div>
            <p class="tip">密码长度6位-18位 </p>
          </div>
          <div class="form-item">
            <label class="label">请确认密码</label>
            <div class="input-inline">
              <input class="input"  type="password" ref="again" required="required" placeholder="请确认密码" @input="againpwd">
            </div>
            <p class="tip err" v-if='iff' >两次密码不一致</p>
          </div>
          <div class="form-item">
            <div class="input-block">
              <button class="btn" @mousedown="submit" >立即提交</button>
              <button class="btn btn-primary" type="reset">重置</button>
            </div>
          </div>
        </form>
    </div>
    <div class="right fr">
      <p>已有淘二淘账号：</p>
      <router-link :to="{name:'login'}">立即登录</router-link>
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
        reg:{ username:/^[a-z_]\w{5,15}$/i,password:/[\w\.\\\-\],?|+*()[{}!"';<>@#$%^&`~=:]{6,18}/,},
        arr:{username:false,password:false,againpwd:false},
        iff:false,
        loding:false
      }
    },
    methods:{
      againpwd(){
        if( this.$refs.again.value===this.$refs.password.value ){
          this.arr.againpwd=true
          this.iff=false
        }else{
          this.arr.againpwd=false
          this.iff=true
        }

      },
      leave(txt,num){

        if( this.reg[txt].test(this.$refs[txt].value) ){
          document.querySelectorAll('p')[num].classList.add('succeed')
          document.querySelectorAll('p')[num].classList.remove('err')
          this.arr[txt]=true
        }else{
          document.querySelectorAll('p')[num].classList.add('err')
          document.querySelectorAll('p')[num].classList.remove('succeed')
          this.arr[txt]=false
        }
      },
      submit(){
        if( Object.values(this.arr).findIndex(x =>x=== false)===-1 ){
          this.$ajax.post('user/reg',{
            'username':this.$refs.username.value,
            'password':this.$refs.password.value
          })
            .then(res=>{
              console.log(res);
              this.data=res.data
            })
        }else{
          this.data='用户名或密码填写不正确'
        }
        this.loding=true
      }
    },
  }
</script>

<style scoped >
  .contain{
    width: auto;
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
  .tip{
    height: 40px;
    line-height: 40px;
  }
  .err{
    color: red;
  }
  .succeed{
    color:green;
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
    width: 560px;
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

