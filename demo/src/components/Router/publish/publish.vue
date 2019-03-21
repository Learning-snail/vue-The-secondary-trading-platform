<template>
    <div>
      <hdNav></hdNav>
      <headnav></headnav>
      <div id="main">
        <imgsub :imgsub.sync="shop.imgUrl" ref="children"></imgsub>
        <shopinfo :shopname.sync="shop.shopname"></shopinfo>
        <shopdetail :shopdetail.sync="shop.shopdetail"></shopdetail>
        <div class="price">
          <price info="价格" txt="请输入价格" word="元" :price.sync="shop.price"></price>
          <price info="原价" txt="请输入原价" word="元" :price.sync="shop.yuanjia"></price>
        </div>
        <selectop :select.sync="shop.select"></selectop>
        <myaddress :myaddress.sync="shop.myaddress"></myaddress>
        <div class="price">
          <price info="手机号" txt="请输入手机号" word="" :price.sync="shop.iphone"></price>
          <price info="QQ号" txt="请输入QQ号" word="" :price.sync="shop.qq"></price>
          <price info="微信号" txt="请输入微信号" word="" :price.sync="shop.weixin"></price>
        </div>
        <shopbutton @click.native="show"></shopbutton>
      </div>
    </div>
</template>

<script>
  import headnav from './publishmodule/headnav'
  import imgsub from './publishmodule/imgsubmit'
  import shopinfo from './publishmodule/info'
  import shopdetail from './publishmodule/shopdetail'
  import price from './publishmodule/price'
  import selectop from './publishmodule/selectop'
  import myaddress from './publishmodule/myaddress'
  import shopbutton from './publishmodule/shopbutton'
    export default {
      name: "publish",
      components:{
        headnav,
        imgsub,
        shopinfo,
        shopdetail,
        price,
        selectop,
        myaddress,
        shopbutton
      },
      data(){
        return {
          shop:{
            imgUrl:'',
            shopname:'',
            shopdetail:'',
            price:'',
            yuanjia:'',
            select:'',
            myaddress:'',
            iphone:'',
            qq:'',
            weixin:''
          },
          iff:false,
          message:['请上传图片','请填写商品名称','请填写商品信息','请填写商品价格','请填写商品原价','请选择分类','请填写交易地址','请填写手机号','请填写qq号','请填写微信号'],

        }
      },
      methods:{
        open(num) {
          this.$message(this.message[num]);
        },
        show(){
          let num=Object.values(this.shop).findIndex((value,index,arr)=>{
            return value===''
          })
          if( num===-1 ){
            this.$refs.children.submit()
              .then(res=>{
                this.shop.imgUrl=res.data.filename
                this.shop.Userid=window.localStorage.getItem('useruid')
              })
              .then(res=>{
                this.$ajax.post('shop/shopinfo',this.shop)
                  .then(res=>{
                    this.$message(res.data.message)
                  })

              });
          }else {
            this.open(num)
          }

        }
      },
      created(){
        if( !window.localStorage.getItem('useruid') ){
            this.$router.push({name:'login'})
        }
      }

    }
</script>

<style scoped>
  #main {
    width: 1100px;
    margin: 20px auto;
    height: auto;
    background-color: white;
    padding: 0 50px;
  }
  .price{
    display: flex;
    width: 750px;
    justify-content: space-between;
    margin-bottom: 20px;
  }


</style>
