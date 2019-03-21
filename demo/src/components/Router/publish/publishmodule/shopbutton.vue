<template>
    <div class="contain">
      <button class="submit">确认发布</button>
    </div>
</template>

<script>
    export default {
        name: "shopbutton"
    }
</script>

<style scoped>
  .contain{
    text-align: center;
    height: 60px;
  }
.submit{
  background-color: #11cd6e;
  width: 150px;
  height: 45px;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: white;

}
.submit:hover{
  opacity: .8;
  color: #fff;
}
</style>
