<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <test v-on:child-tell-me-something="addItem"></test>
    <p>child tells me :{{this.childMsg}}</p>
    <componentA :dataFromFather="ItemOne" v-on:child-tell-me-something="listenToMyBoy"></componentA>
    <button v-on:click="sese">sese</button>
  </div>
</template>

<script>
import componentA from './components/componentA.vue'
import Hello from './components/Hello'
import Test from './components/test.vue'
export default {
  data(){
    return {
      childMsg:'',
      ItemOne:"",
    }
  },
  name: 'app',
  components: {
    Hello,
    Test,
    componentA
  },
  methods:{
    listenToMyBoy (msg){
      // this.childMsg = msg;
       // console.log(this.componentA)
    },
    sese(){
      console.log(this.$children[1].dataFromFather = 'aaa')
    },
    addItem(msg){
      this.ItemOne = msg;
    }
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
  margin-top: 60px;
}
</style>
