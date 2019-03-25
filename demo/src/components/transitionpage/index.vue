<template>
    
</template>

<script>
    export default {
        name: "index",
      created(){
        let path= this.$route.params.path
        let key = this.$route.params.keywords
        let city = this.$route.params.city
        if( key ||city){
          this.$router.push({name:(path||'/'),query:{keywords:key,city:city}})
        }else{
          this.$router.push((path||'/'))
        }

      }
    }
</script>

<style scoped>

</style>
