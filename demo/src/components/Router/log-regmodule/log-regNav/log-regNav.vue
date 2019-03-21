<template>
    <div>
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="first">
          </el-tab-pane>
          <el-tab-pane label="用户注册" name="second">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: "log-regNav",
        data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick(tab,event){

            tab.$el.id==='pane-first'?this.$router.push('/login'):this.$router.push('/register')

          }
        },
        mounted(){
          this.$route.path==="/login"?this.activeName='first':this.activeName='second'

        }
    }
</script>

<style scoped>
.tab{
  position: relative;
  margin:10px 80px;

}


</style>
