<template>
    <div class="tab">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="收到的留言" name="first">
          <receive></receive>
        </el-tab-pane>
        <el-tab-pane label="发布的留言" name="second">
          <announce></announce>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import receive from './message/receive'
  import announce from './message/announce'
    export default {
      name: "mymessage",
      data() {
        return {
          activeName: 'first',
        };
      },
      components:{
        receive,
        announce
      },
      methods: {
      }
    }
</script>

<style scoped>
.tab{
  margin: 0 10px;
}
.tab >>> .is-active{
  color:#11cd6e;
}
  .tab >>> .el-tabs__active-bar{
    background-color: #11cd6e;
  }
</style>
