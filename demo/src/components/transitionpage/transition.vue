<template>

</template>

<script>
  export default {
    name: "index",
    created(){
      this.$router.push({name:'category_list',params:{id:this.$route.params.id}})
    }
  }
</script>

<style scoped>

</style>
