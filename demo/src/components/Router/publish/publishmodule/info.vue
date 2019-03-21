<template>
    <div class="contain">
      <label class="shopinfo">商品名称</label>
      <el-input v-model="shopname" placeholder="请输入商品名称" class="shopname" @blur="submitname"></el-input>
      <span class="word">14字以内</span>
    </div>
</template>

<script>
    export default {
      name: "info",
      data(){
        return {
          shopname:'',

        }
      },
      methods:{
        submitname(){
          this.$emit('update:shopname',this.shopname)
        }
      }
    }
</script>

<style scoped>
  .contain{
    display: flex;
  }
  .shopinfo{
    display:block;
    float: left;
    width: 80px;
    padding: 8px 15px;
    line-height: 20px;
    border: 1px solid #e6e6e6;
    border-radius: 2px 0 0 2px;
    text-align: center;
    background-color: #FBFBFB;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 15px;
  }
  .shopname{
    width: 390px;
    margin-right: 10px;
    color: #000;
  }
  .word{
    display: block;
    padding: 8px 0;
    margin-right: 10px;
    font-size: 12px;
    color: #999;
  }

</style>
