<template>
  <div class="good-description">
    <div class="description-title">
      <span>二货留言</span>
    </div>
    <!--留言-->
    <div class="commentList">
      <ul ref="commentlist">
        <li v-for="(item,index) in (comment?comment:commentList)" :key="index">
          <div>
            <img :src="'http://127.0.0.1:3001'+item.from.avatar">
            <span>用户:{{item.from.name?item.from.name:item.from.username}} 评论：</span>
            <span>{{item.content}}</span>
            <span class="floor">{{index+1}}楼</span>
          </div>
        </li>
      </ul>
    </div>
    <!--描述-->
    <div class="descriptbody" >
      <div class="comment-list">
        <ul></ul>
      </div>
      <div v-if="iff">
        <el-input
          type="textarea"
          :rows="4"
          resize='none'
          placeholder="请输入留言内容"
          v-model="textarea"
          maxlength="100"
          class="comments">
        </el-input>
        <div class="comment-btns">
          <button class="btn comment-submit" @click="submit">提交</button>
          <span class="comments-words">{{this.textarea.length}}/100</span>
        </div>
      </div>
    <div class="descriptbody" v-else>
      <div class="user-not-login" >
        <p>
          <router-link class="lgbtn" :to="{name:'login'}">登录</router-link>
          <router-link class="lgbtn" :to="{name:'register'}">注册</router-link>
        </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "description",
      props: ["data",'commentList'],
      data() {
        return {
          textarea: '',
          iff: false,
          comment:''
        }
      },
      methods: {
        submit() {
          if( !this.textarea )return this.$message('请填写留言内容')
          let data = {
            content: this.textarea,
            from: window.localStorage.getItem('useruid'),
            article: this.data._id,
            author:this.data.Userid._id
          }
          this.$ajax.post('user/comment',data)
            .then(res => {
              if( res.data.status===1 ){
                this.$ajax.get('/comment/shopcomment?id='+this.data._id)
                  .then(res=>{
                    this.comment=res.data.data
                  })
              }
              this.$message(res.data.message)
            })
          this.textarea=''
        }
      },
      created(){
        this.iff =window.localStorage.getItem('username')
      }
    }
</script>

<style scoped>
  .commentList ul li {
    background-color: #fff;
    /*border: #e5e5e5 solid 1px;*/
    height: 70px;
  }
  .commentList ul li div{
    line-height: 70px;
    text-indent: 2em;
    font-size: 16px;
  }
  .commentList ul li img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .commentList ul li span.floor{
    float: right;
    color: #ccc;
  }
  .description-title {
    border-bottom: #11cd6e solid 1px;
  }
  .description-title span {
    line-height: 40px;
    border-bottom: #11cd6e solid 4px;
    display: inline-block;
    padding: 0 15px;
    font-size: 16px;
    font-weight: bold;
  }
  .descriptbody{
    padding: 15px;
    overflow: hidden
  }
  .comment-list {
    padding: 10px 0;
  }
  .comments >>> .el-textarea__inner{
    border-color: #11cd6e;
  }
  .comment-btns{
    margin-top: 10px;
  }
  .btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    opacity: .9;
    filter: alpha(opacity=90);
    background-color: #11cd6e;
  }
  .comments-words {
    margin-left: 20px;
    color: #999;
  }
  .user-not-login {
    border: #11cd6e solid 1px;
    border-radius: 5px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .user-not-login p {
    text-indent: initial;
  }
  .user-not-login a.lgbtn {
    display: inline-block;
    border: #11cd6e solid 1px;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    height: 30px;
    padding: 0 20px;
    color: #11cd6e;
  }
</style>
