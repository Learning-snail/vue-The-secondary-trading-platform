<template>
    <div class="contain">
      <label class="shopinfo">商品详情</label>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入商品详情"
        v-model="detail"
      @blur="leave">
      </el-input>
    </div>
</template>

<script>
    export default {
        name: "shopdetail",
        data(){
          return {
            detail: ''
          }
        },
      methods:{
        leave(){
          this.$emit('update:shopdetail',this.detail)
        }
      }
    }
</script>

<style scoped>
.contain{
  margin: 30px auto;
}
.shopinfo{
  display:block;
  float: left;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e6e6e6;
  background-color: #FBFBFB;
  font-weight: 400;
  font-size: 15px;
  border-right: 1px solid #e6e6e6;
  border-radius: 2px;
  box-sizing: border-box!important;
  text-align: left;
}
</style>
