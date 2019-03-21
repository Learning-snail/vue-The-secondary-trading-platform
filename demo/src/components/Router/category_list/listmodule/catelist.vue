<template>
    <div>
      <ul class="cate-name-list">
        <li v-for="(item,index) in arr" :key="index" class="list">
          <!--<a href="javascript:;">-->
            <!--&lt;!&ndash;<p @click="submit(index)" v-text="item"></p>&ndash;&gt;-->
          <!--</a>-->
          <router-link :to="{name:'category_list',params:{id:index}}">
            <p v-text="item"></p>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "catelist",
      props:['arr'],
      data(){
        return {

        }
      },
      watch: {
        '$route'(to, from) {
          if (to.fullPath !== from.fullPath) {
            let aP = document.querySelectorAll('p')
            for (let i = 0, length = aP.length; i < length; i++) {
              aP[i].classList.remove('active')
            }
            aP[this.$route.params.id].classList.add('active')
          }
        }
      },
      mounted(){
        let aP = document.querySelectorAll('p')
        aP[this.$route.params.id].classList.add('active')
      }
    }
</script>

<style scoped>
.cate-name-list{
  display: flex;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: #e5e5e5 solid 1px;
  background-color: #fff;
}
.cate-name-list .list{
  margin: 0 10px;
}
.cate-name-list .list a{
  color: #999;
  font-size: 13px;
}
.cate-name-list .list p.active{
    color:#11cd6e
  }
/*.cate-name-list .list a.active{*/
  /*color:#11cd6e*/
/*}*/
</style>
