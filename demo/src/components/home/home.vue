<template>
    <div >
      <hdNav></hdNav>
      <hdseacher></hdseacher>
      <div id="home">
      <div class="left fl" :style="{position:iff?'':'fixed',top:iff?'':'20px'}">
        <Side></Side>
      </div>
      <div class="middle fl" :style="{marginLeft:iff?'20px':'210px'}">
        <Banner></Banner>
        <div>
          <Midbot></Midbot>
        </div>
      </div>
      <div class="right fr">
        <div class="r-top">
          <img src="../../../static/img/erweima.png" width="100%" height="100%" alt="">
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  import Side from '../leftSide/side'
  import Banner from './banner/banner'
  import Midbot from './middlebottom'

    export default {
        name: "home",
        components:{
          Side,
          Banner,
          Midbot,

        },
        data(){
          return {
            iff:true
          }
        },
        methods:{
            scorll(){
               window.scrollY<140?this.iff=true:this.iff=false
            }
        },
          mounted(){
              window.addEventListener('scroll',this.scorll)
      },

      }
</script>

<style scoped>
  #home{
    width: 1100px;
    margin: 20px auto;
  }
 .left{
   width: 190px;
   background-color: #fff;
   border-radius: 5px;
   border-right: #e5e5e5 solid 1px;
 }
  .right{
    width: 204px;
  }
  .right .r-top{
    width: 100%;
    height: 250px;
  }
  .middle{

  }
</style>
