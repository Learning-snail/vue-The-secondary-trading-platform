<template>
    <div>
      <hdNav></hdNav>
      <hdseacher></hdseacher>
      <div id="main">
        <catelist  :arr="arr"></catelist>
        <layout :arr="arr"></layout>
      </div>
    </div>
</template>

<script>
  import catelist from './listmodule/catelist'
  import layout from './listmodule/layout'
    export default {
      name: "category_list",
      components:{
        catelist,
        layout
      },
      data(){
        return {
          cateName:'',
          arr:['全部分类','手机','电脑','配件','电器','书籍','娱乐','运动','代步'],
        }
      },
      created(){
        // this.cateName=this.arr[this.$route.params.id]
        // this.$ajax.post('/shop/shopget',{'cateName':this.cateName})
        //   .then(res=>{
        //     this.cateArr=res.data[0]
        //   })
      }
    }
</script>

<style scoped>
#main{
  width: 1100px;
  margin: 20px auto;
}
</style>
