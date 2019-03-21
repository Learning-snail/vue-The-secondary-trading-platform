<template>
    
</template>

<script>
    export default {
        name: "index",
      created(){
        let path= this.$route.params.path
          let key = this.$route.params.keywords
        if( key ){
          this.$router.push({name:(path||'/'),query:{keywords:key}})
        }else{
          this.$router.push((path||'/'))
        }

      }
    }
</script>

<style scoped>

</style>
