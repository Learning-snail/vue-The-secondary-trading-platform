<template>
  <div id="side">
    <div v-for="(item,index) in arr" :key="index">
      <sideModule :txt="item" :index="index"></sideModule>
    </div>
  </div>
</template>

<script>
    import sidemodule from './sidemodule/sidemodule'
    export default {
        name: "side",
        data(){
          return {
            arr:['手机','电脑','配件','电器','书籍','娱乐','运动','代步']
          }
        },
        components:{
          'sideModule':sidemodule
        }
    }
</script>

<style scoped>

</style>
