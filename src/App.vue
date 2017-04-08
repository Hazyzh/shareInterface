<template>
  <div id="app">
    <share-words></share-words>
  </div>
</template>

<script>
import shareWords from './views/shareWords'
export default {
  components:{
    shareWords
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
