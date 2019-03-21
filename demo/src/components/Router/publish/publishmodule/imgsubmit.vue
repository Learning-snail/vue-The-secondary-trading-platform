<template>
    <div class="contain">
      <div class="box">
        <form method="post" action="javascript:;" enctype="multipart/form-data">
          <input type="file" name="file" ref="input" @change="imgUrl" class="upload-file info-img-upload">
          <div class="txt">
            <div class="circle">
              <span class="add">+</span>
            </div>
            <span class="upload">
          上传图片</span>
          </div>
          <i v-if="imageUrl" class="iconfont icon-shanchu delet" @click="deleted"></i>
          <img v-if="imageUrl" :src="imageUrl" class="img">
        </form>

      </div>
    </div>
</template>

<script>
    export default {
      name: "imgsubmit",
      data() {
        return {
          imageUrl: '',
          iff:false,
          file:''
        };
      },
      methods: {
        deleted(){
          this.imageUrl=''
          this.$emit('update:imgsub',this.imageUrl)
        },
        imgUrl(){
          if(  !this.$refs.input.value)return ;
          this.file=this.$refs.input.files[0]
            this.imageUrl = URL.createObjectURL(this.file);
            this.$emit('update:imgsub',this.imageUrl)
          },
        submit(){
          let formdata=new FormData()
          formdata.append('file',this.file)
          return this.$ajax.post('/shop/shopimg',formdata)
      }
      },

    }
</script>

<style scoped>
  .contain{
   padding: 30px 0;
  }
  .box{
    width: 153px;
    height: 153px;
    border: #11cd6e solid 2px;
    margin: 0 auto;
  }
  form{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .upload-file{
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }
  .txt{
    position: absolute;
    display: flex;
    width: 100%;
    height: 36px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

  }
  .circle{
    width: 32px;
    height: 32px;
    border-radius:50% ;
    border: 2px solid #11cd6e;
    margin:0 5px 0 14px;
    text-align: center;
    line-height: 32px;
  }
  .add{
    color: #11cd6e;
    font-size: 32px;
  }
  .upload{
    font-size: 20px;
    line-height: 32px;
  }
  .img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .delet{
    position: absolute;
    color: #f40;
    font-size: 24px;
    right: -13px;
    top: -19px;
    cursor: pointer;
  }
</style>
