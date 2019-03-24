<template>
    <div>
      <ul>
        <li v-for="(item,index) in userlist" :key="index">
          <img :src="'http://127.0.0.1:3001'+item.avatar" alt="item.shopname">
          <div class="userinfo">
        <span>账号：{{item.username}}</span>
        <span>昵称：{{item.name||'无'}}</span>
          </div>
          <div class="operation fr">
            <el-button type="text" @click="open2(item._id)">删除用户</el-button>
          </div>

        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data(){
          return {
            userlist:''
          }
        },
        methods:{
          open2(id) {
            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$ajax.delete("/user/delete?id="+id)
                .then(res=>{
                  if(res.data.state===1){
                    this.$router.push({name:'transition',params:{'path':'user/admin'}})
                    this.$message({
                      type: 'success',
                      message: '删除成功!'
                    });
                  }else{
                    this.$message({
                      type: 'info',
                      message: '删除失败!'
                    });
                  }
                })

            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        },
        created(){
          this.$ajax.get('/user/users')
            .then(res=>{
              this.userlist = res.data.data
            })
        }
    }
</script>

<style scoped>
   ul li {
    display: flex;
    background-color: #fff;
    border: #e5e5e5 solid 1px;
    height: 110px;
    justify-content: space-between;
     padding: 10px 20px 0;
  }
   ul li img {
     width: 100px;
     height: 100px;
     border-radius: 50%;

   }
   .userinfo{
     min-width: 300px;
     line-height: 110px;
   }
   .userinfo span{
     margin-left: 20px;
   }
   .operation {
     width: 150px;
     border-left: #e5e5e5 solid 1px;
     height: 70px;
     padding-top: 35px;
   }
   .operation >>> .el-button--text {
     display: block;
     text-align: center;
     width: 90px;
     border: #e5e5e5 solid 1px;
     border-radius: 3px;
     margin: 5px auto;
     color: #000;
   }
</style>
