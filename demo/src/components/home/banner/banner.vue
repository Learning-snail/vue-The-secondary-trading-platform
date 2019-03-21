<template>
  <div>
  <div class="block">
    <el-carousel height="250px">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="'../../../../static/img/'+item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
          return{
            arr:['banner-1.png','banner-2.jpg']
          }
        }
    }
</script>

<style scoped>
  .block{
    overflow: hidden;
    width: 665px;
    border-radius: 5px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
