<template>
      <div class="contain">
        <label class="shopinfo">{{info}}</label>
      <el-input v-model="shopprice" :placeholder=txt class="shopname" @blur="leave"></el-input>
      <span class="word" v-text="word" ></span>
    </div>
</template>

<script>
    export default {
        name: "price",
      props:['info','txt','word'],
      data(){
        return {
          shopprice:''
        }
      },
      methods:{
        leave(){
          this.$emit('update:price',this.shopprice)
        }
      }
    }
</script>

<style scoped>
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
  .contain{
    display: flex;
  }
  .shopname{
    width: 190px;
    margin-right: 10px;
  }
  .word{
    display: block;
    padding: 8px 0;
    margin-right: 10px;
    font-size: 12px;
    color: #999;
  }

</style>
