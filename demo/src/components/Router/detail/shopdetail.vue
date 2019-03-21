<template>
    <div>
      <hdNav></hdNav>
      <hdseacher></hdseacher>
      <div class="contain">
        <Left :data="data" :username="username"></Left>
        <Right :cateArr="cateArr"></Right>
      </div>

    </div>
</template>

<script>
    import Left from './detailmodule/left'
    import Right from './detailmodule/right'
    export default {
      name: "shopdetail",
      components:{
        Left,
        Right
      },
      data(){
        return{
          data:'',
          username:'',
          select:'',
          cateArr:''
        }
      },
      methods:{
        ajax(params){
          return this.$ajax.post('shop/detail',{params:params})
            .then(res=>{
              this.data=res.data[0];
              this.username=this.data.Userid.name||this.data.Userid.username;
              this.select=this.data.select
            })
        }
      },
      watch: {
        $route(to, from) {
          if (to.fullPath !== from.fullPath) {
            this.ajax(to.params.id)
          }
        }
      },
      created(){
        let params=this.$route.params.id
        this.ajax(params)
          .then(res=>{
            this.$ajax.post('/shop/shopget',{'cateName':this.select})
              .then(res=>{
                this.cateArr=res.data.data.slice(0, 6)
              })
          })
      }
    }
</script>

<style scoped>
.contain{
  width: 1100px;
  border: #e5e5e5 solid 1px;
  border-radius: 5px;
  margin: 20px auto;
}

</style>
