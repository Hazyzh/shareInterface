<template>
	<div class="app">
		<h1>Hello</h1>
		<span>{{msg}}</span>
		<br>
		<button @click="myfun">click</button>
		<input v-model="myInput" placeholder="write here">
		<hr>
		<p>{{myInputComputed}}</p>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome To Your Vue.js App !',
      myInput:''
    }
  },
  computed:{
	myInputComputed(){
		return this.myInput||'Default text !';
	}
  },
  methods:{
  	myfun(){
  		this.msg = this.msg.repeat(2);
  	}
  }
}
</script>

<style>
</style>