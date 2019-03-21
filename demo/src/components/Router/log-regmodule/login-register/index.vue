<template>
    <div class="loding" v-if="iff">
      <div class="box">
        <h1>{{data}}</h1>
        <button class="btn btn-primary" @click="back">确定</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      props:['data','iff'],
      methods:{
          back(){
            if( this.data==='登录成功' ){
              this.$router.push('/')
            }
            this.$emit('update:iff',false)

          }
      },
    }
</script>

<style scoped>
  .loding{
    position: absolute;
    width: 556px;
    height: 280px;
    text-align: center;
    line-height: 200px;
    background-color:#fff;
  }
  .box{
    width: 600px;
    height: 100%;
    margin: 0 auto;
    border-radius: 5px;
  }
  h1{
    height: 50%;
    font-size: 20px;
    color: green;
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
</style>
