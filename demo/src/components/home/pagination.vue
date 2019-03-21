<template>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="maxNum"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      name: "pagination",
      props:['maxNum','params','p','path'],
      data(){
        return {
          currentPage:'',

        }
      },
      methods:{
        handleCurrentChange(currentPage){
          this.currentPage=currentPage
          this.$router.push({name:this.path,query:{n:this.params,p:this.currentPage}})
        },

      },
      created(){
        this.currentPage = Number(localStorage.getItem('pagination')) || 1;
      },
      beforeUpdate() {
        localStorage.setItem('pagination', this.currentPage);
      },
      beforeDestroy() {
        localStorage.setItem('pagination', '1');
      },
      watch:{
        '$route'(to,from){
          if (to.fullPath !== from.fullPath) {
            this.currentPage =Number(this.$route.query.p) || 1
          }
        }
      }

    }
</script>

<style scoped>
.pagination{
  width: 100%;
  overflow: hidden;
  text-align: center;
  padding: 20px 0 25px;
}
.pagination >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color:#11cd6e;
  color: #fff;
}
</style>
