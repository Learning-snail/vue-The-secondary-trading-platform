<template>
    <div>
      <div v-if="!data.length" class="no-data">
        <p>您还没有发布过留言~</p>
      </div>
      <div>
        <ul class="published-comment-list">
          <li v-for="(item,index) in data" :key="index">
            <p>
              <b>我</b> 评论
              <router-link :to="{name:'shopdetail',params:{id:(item.article.imgUrl)}}">{{item.article.shopname}}
              </router-link>：{{item.content}}
              <span class="fr">发布于：{{getTime(item.created)}}</span>
            </p>
            <p>
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "announce",
        data(){
          return {
            data:''
          }
        },
      methods:{
        getTime(time){
          return new Date(+new Date(time)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        },
      },
      created(){
        let uid = window.localStorage.getItem('useruid')
        this.$ajax.get('comment/comment?a='+uid)
          .then(res=>{
            this.data=res.data
            console.log(this.data);
          })
      }
    }
</script>

<style scoped>
  .no-data{
    border:none
  }
  .published-comment-list li {
    padding-bottom: 10px;
    margin-bottom: 0;
    border-bottom: #e2e2e2 solid 1px;
  }
  .comment-list li p, .published-comment-list li p {
    line-height: 35px;
  }
  .comment-list li p a, .published-comment-list li p a {
    color: #11cd6e;
  }
  .comment-list li span, .published-comment-list li span {
    color: #ccc;
    font-size: 12px;
  }
</style>
