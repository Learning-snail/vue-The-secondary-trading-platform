<template>
    <div>
      <label class="label">分类</label>
      <el-select v-model="value" placeholder="请选择" @input="leave">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
        name: "selectop",
      data() {
        return {
          options: [{
            value: '手机',
            label: '手机'
          }, {
            value: '电脑',
            label: '电脑'
          }, {
            value: '配件',
            label: '配件'
          }, {
            value: '电器',
            label: '电器'
          }, {
            value: '书籍',
            label: '书籍'
          },{
            value: '娱乐',
            label: '娱乐'
          },{
            value: '运动',
            label: '运动'
          },{
            value: '代步',
            label: '代步'
          },],
          value: '',
          label:''
        }
      },
      methods:{
        leave(){
          this.$emit('update:select',this.value)
        }
      }
    }
</script>

<style scoped>
.label{
  display:block;
  float: left;
  width: 80px;
  padding: 8px 15px;
  line-height: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 2px 0 0 2px;
  text-align: center;
  background-color: #FBFBFB;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 15px;
}
</style>
