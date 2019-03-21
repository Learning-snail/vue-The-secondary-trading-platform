<template>
    <div class="contain">
      <div class="useravatar flex">
        <label class="picture-para">头像</label>
          <div class="fl avatar">
            <img :src="avatar" alt="">
            <div class="upload-button">
              <p class="sub">上传图片</p>
              <form method="post" action="javascript:;" enctype="multipart/form-data">
                <input type="file" name="file" ref="input" @change="imgUrl" class="upload-file info-img-upload">
              </form>
            </div>
          </div>
      </div>


      <div class="flex username">
        <label class="picture-para">昵称</label>
        <div class="nicheng">
          <input type="text" v-model="nicheng" required="required">
        </div>
      </div>
      <div class="flex usersex box">
        <label class="picture-para sex">性别</label>
        <div class="selectsex">
          <el-radio v-model="radio" label="男">男</el-radio>
          <el-radio v-model="radio" label="女">女</el-radio>
        </div>
      </div>
      <div class="flex usersex box">
        <label class="picture-para sex">生日</label>
        <div class="block selectdate">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="flex usersex box cityinfo">
        <label class="picture-para sex">所在地</label>
          <el-form ref="form" :model="form" label-width="100px" class="form">
              <el-cascader
                :options="CityInfo"
                v-model="form.selectedOptions"
                :change-on-select="true"
                :clearable="true"
                :filterable="true"
                @change="handleChange">
              </el-cascader>
          </el-form>
      </div>
          <el-button type="primary" @click="onSubmit" class="button">保存修改</el-button>

    </div>
</template>

<script>
  import {CityInfo} from '../../../../../test/plugins/city-picker/city-data'
    export default {
        name: "checkinfo",
      data() {
        return {
          avatar:('http://127.0.0.1:3001'+window.localStorage.getItem('avatar')),
          file:'',
          nicheng:'',
          radio: '男',
          date: '',
          CityInfo:CityInfo,
          form: {
            city : '',
            erae : '',
            minerae : '',
            selectedOptions: [],//地区筛选数组
          },
        }
      },
      methods: {
        onSubmit() {
          let Form = new FormData()
          let json={
            cityinfo:this.myAddressCity(this.form.city)+this.myAddressErae(this.form.erae)+this.myAddressMinerae(this.form.minerae),
            sex:this.radio,
            birthday:this.date,
            name:this.nicheng,
            uid: window.localStorage.getItem('useruid')
          }
          if( this.file ){
            Form.append('file',this.file)
            this.$ajax.post('/user/myavatar',Form)
              .then(res=>{
                window.localStorage.setItem('avatar','/avatar/'+res.data.filename)
                json.avatar='/avatar/'+res.data.filename
              })
              .then(res=>{
                this.$ajax.post('/user/myinfo',json)
                  .then(res=>{
                    this.$message(res.data)
                    window.localStorage.setItem('name',this.nicheng)
                    this.$router.push({name:'transition',params:{path:'/user/checkinfo'}})
                  })
              })
          }else{
            this.$ajax.post('/user/myinfo',json)
              .then(res=>{
                this.$message(res.data)
                window.localStorage.setItem('name',this.nicheng)

                this.$router.push({name:'transition',params:{path:'/user/checkinfo'}})
              })
          }


        },
        imgUrl(){
          if(  !this.$refs.input.value)return ;
          this.file=this.$refs.input.files[0]
           this.avatar= URL.createObjectURL(this.file)
        },
        handleChange(value) {
          this.form.city = this.form.selectedOptions[0];
          this.form.erae = this.form.selectedOptions[1]
          this.form.minerae = this.form.selectedOptions[2]
        },
        myAddressCity(value){
          let city=''
         this.CityInfo.forEach(item=>{
            if(item.value === value){
              city=item.label
            }
          })
          return city
        },
        myAddressErae(value){
          let erae=''
          this.CityInfo.forEach(item=>{
            if(item.value === this.form.city){
              item.children.forEach(item=>{
                if( item.value === value ){
                    return erae=item.label
                }
              })
            }
          })
          return erae
        },
        myAddressMinerae(value){
          let minerae=''
          this.CityInfo.forEach(item=>{
            if(item.value === this.form.city){
              item.children.forEach(item=>{
                if( item.value === this.form.erae ){
                  item.children.forEach(item=>{
                    if( item.value=value ){
                      minerae = item.label
                    }
                  })
                }
              })
            }
          })
          return minerae
        },
      },
      created(){

      },
    }
</script>

<style scoped>
  .contain{
    background: #fff;
    padding-top: 20px;
  }
  .useravatar{
    display: flex;
  }
  .avatar{
    display: flex;
  }
  .avatar img{
    width: 100px;
    height: 100px;
    border: #e5e5e5 solid 1px;
  }
  .picture-para {
    line-height: 80px;
    float: left;
    display: block;
    padding: 9px 15px;
    width: 80px;
    font-weight: 400;
    text-align: right;
  }
  form{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .info-img-upload{
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }
  .upload-button{
    position: relative;
    width: 110px;
    height: 36px;
    border-radius: 2px;
    background-color: #fff;
    color: #000;
    margin-left: 20px;
    margin-top: 32px;
    border:1px solid #11cd6e;
    text-align: center;
    line-height: 36px;
  }
  .username,.box{
    width: 100%;
    height: 85px;
  }
  .nicheng{
    float: left;
    width: 340px;
    margin-right: 10px;
    margin-top: 32px;
  }
  .nicheng input {
    display: block;
    width: 100%;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
    line-height: 36px\9;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 2px;
  }
  .sex{
    margin-left: -106px;
  }
  .selectsex{
    float: left;
    width: 340px;
    margin-right: 10px;
    margin-top: 40px;
  }
.selectdate{
  float: left;
  margin-top: 26px;
}
  .form{
    position: static;
    line-height: 85px;
  }
.usersex >>> .el-input{
  width: 340px;
}
  .button {
    background-color: #11cd6e;
    opacity: 0.9;
  }
  .button:hover{
    opacity: 0.8;
  }
</style>
