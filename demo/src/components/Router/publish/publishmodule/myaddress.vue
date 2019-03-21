<template>
    <div class="contain">
      <label class="address">交易地址</label>
      <el-input v-model="address" placeholder="请输入交易地址" class="addressinp" @blur="leave"></el-input>
    </div>
</template>

<script>
    export default {
        name: "myaddress",
      data(){
          return {
            address:''
          }
      },
      methods:{
        leave(){
          this.$emit('update:myaddress',this.address)
        }
      }
    }
</script>

<style scoped>
  .contain{
    width: 100%;
    display: flex;
    margin: 20px 0;
  }
  .address{
    display:block;
    width: 90px;
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
  .addressinp{
    /*width: 60%;*/
    margin-right: 10px;
    color: #000;
  }
</style>
