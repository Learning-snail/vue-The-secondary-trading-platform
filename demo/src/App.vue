<template>
  <div id="app">
    <!--<hdNav></hdNav>-->
    <!--<Search></Search>-->
      <router-view/>
  </div>
</template>

<script>
  // import hdNav from './components/common/hdNav'
  // import Search from './components/search/search'
export default {
  name: 'App',
  // components:{
  //   'hdNav':hdNav,
  //   'Search':Search
  // }
}
</script>

<style>
body{
  background-color: #f2f2f2;
}
</style>
