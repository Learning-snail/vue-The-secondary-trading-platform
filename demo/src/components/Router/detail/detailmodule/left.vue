<template>
    <div>
      <div class="detail fl clearfix">
        <div id="MagnifierWrap2" class="fl">
          <div class="MagnifierMain">
            <img class="MagTargetImg" :src="'http://127.0.0.1:3001/shopimg/'+params" alt="data.shopname">
          </div>
        </div>
        <!--商品描述-->
        <div class="good-info fr">
          <h2>{{data.shopname}}</h2>
          <div class="info-line">
            <span class="param-name">价格</span>
            <span class="param-value good-price">￥{{data.price}}</span>
          </div>
          <div class="info-line">
            <span class="param-name">原价</span>
            <span class="param-value good-old-price">￥{{data.yuanjia}}</span>
          </div>
          <div class="info-line">
            <span class="param-name">交易地址</span>
            <span class="param-value address">{{data.myaddress}}</span>
          </div>

          <div class="info-line">
            <span class="param-name">卖家</span>
            <span class="param-value">{{username}}</span>
          </div>
          <div class="info-line">
            <span class="param-name">交易方式</span>

            <span class="param-value">在线交易 / 线下交易</span>
          </div>
          <div class="info-line btns">
            <a href="javascript:;" class="info-btn contect-seller" @click="open">联系卖家</a>
            <a href="javascript:;" class="info-btn want" @click="want">
              想要
            </a>
          </div>
          <Alert :iff.sync="iff" :data="data"></Alert>
        </div>

        <!--二货描述-->
        <div class="good-description">
          <div class="description-title">
            <span>二货描述</span>
          </div>
          <div class="description-body">
            <p>
              {{data.shopdetail}}
            </p>
          </div>
        </div>
        <description :data="data" :commentList="commentList"></description>
      </div>
    </div>
</template>

<script>
  import description from './good-description/description'
  import Alert from './good-description/alart'
    export default {
      name: "contain",
      components:{
        description,
        Alert
      },
      props:['data','username','commentList'],
      data(){
        return {
          params:this.$route.params.id,
          iff:false

        }
      },
      watch: {
        $route(to, from) {
          if (to.fullPath !== from.fullPath) {
            this.params=this.$route.params.id
          }
        }
      },
      methods:{
        open(){
          if( !window.localStorage.getItem('useruid') ){
            this.$message('请先登录')
          }else{
            this.iff=true
          }

        },
        want(){
          if( !window.localStorage.getItem('useruid') ){
            this.$message('请先登录')
          }else{
            let json={
              user:window.localStorage.getItem('useruid'),
              shopname:this.data.shopname,
              price:this.data.price,
              imgUrl:this.$route.params.id
            }
            this.$ajax.post('/want/want',json)
              .then(res=>{
                this.$message(res.data)
              })
          }
        }
      }
    }
</script>

<style scoped>
  .detail {
    width: 800px;
    border: #e5e5e5 solid 1px;
    background-color: #fff;
    border-radius: 5px;
  }
  #MagnifierWrap2 {
    position: relative;
    width: 350px;
    margin: 20px;
  }
  .MagnifierMain {
    position: relative;
    width: 350px;
    height: 350px;
    border: #e5e5e5 solid 1px;
  }
  .MagnifierMain img {
    width: 350px;
    height: 350px;
  }
  .good-info {
    margin: 20px;
    width: 370px;
  }
  .good-info h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .info-line {
    line-height: 50px;
    clear: both;
  }
  .info-line .param-name {
    font-size: 13px;
    color: #999;
    width: 65px;
    float: left;
  }
  .info-line .param-value {
    max-width: 305px;
  }
  .good-price {
    color: #f40;
    font-size: 24px;
    font-weight: bold;
  }
  .good-old-price {
    text-decoration: line-through;
  }
  .btns {
    margin-top: 20px;
  }
  .info-btn {
    line-height: 50px;
    padding: 0 30px;
    border-radius: 5px;
    color: #fff;
    background-color: #11cd6e;
    display: inline-block;
    font-size: 20px;
    margin-right: 15px;
  }
  .btns .want {
    background-color: #fff;
    color: #11cd6e;
    border: #11cd6e solid 2px;
    line-height: 46px;
  }
  .info-btn {
    line-height: 50px;
    padding: 0 30px;
    border-radius: 5px;
    color: #fff;
    background-color: #11cd6e;
    display: inline-block;
    font-size: 20px;
    margin-right: 15px;
  }
  .want i {
    font-size: 40px;
    vertical-align: bottom;
    color: #ccc;
  }
  /*二货描述*/
  .good-description {
    clear: both;
    padding: 20px;
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
  .description-body {
    padding: 15px;
    overflow: hidden;
  }
  .description-body p {
    text-indent: 2em;
    color: #999;
  }
</style>
