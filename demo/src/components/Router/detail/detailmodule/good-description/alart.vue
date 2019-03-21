<template>
        <div class="content" v-if="iff">
          <div class="user-contect">
          <i class="iconfont icon-shanchu delete" @click="close"></i>
            <div class="user-contectlayer-wrap" style="display: block;">
            <div class="contect-header">联系方式</div>
            <p>手机号：{{data.iphone}}</p>
            <p>QQ号：{{data.qq}}</p>
              <p>微信号：{{data.weixin}}</p>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
      name: "alart",
      props:['iff','data'],
      methods:{
        close(){
          this.$emit('update:iff',false)
        }
      }
    }
</script>

<style scoped>
.content{
  position: absolute;
  width: 304px;
  height: 124px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
}
.user-contect {
  position: relative;
  border: #11cd6e solid 2px;
  border-radius: 4px;
  background: #fff;
}
.contect-header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #11cd6e;
  color: #fff;
  font-size: 16px;
}
.user-contect p {
  line-height: 40px;
  text-align: center;
}
  .delete{
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 30px;
    color: #ccc;
    cursor: pointer;
  }
.delete:hover{
  color: lightskyblue;
}
</style>
