<template>
    <div id="skip">
      <router-link :to="{name}" v-text="title" class="skip"></router-link>
    </div>
</template>

<script>
    export default {
        name: "skip",
        props:['title','name','click']
    }
</script>

<style scoped>
  #skip{
    display: inline-block;
    transition: .3s;
  }
.skip{
    color: #fff;
    font-size: 17px;
    padding: 0 20px;
    line-height: 60px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
}
  #skip:hover{
    background-color: rgba(255,255,255,.2);
  }
</style>
