<template>
	<div>
		<h1>{{message1+message2}}</h1>
		<h1>U change a Item : {{this.dataFromFather}}</h1>
		<button v-on:click="myClick">click</button>
	</div>
</template>

<script>
	export default {
		data:function() {
			return {
				message1:'hello',
				message2:'world'
			}
		},
		props:['dataFromFather'],
		event:{
			'fatherSendMsg':function(msg){
				console.log(msg);
			}
		},
		methods: {
			myClick:function(){
				// console.log(this.dataFromFather);
				this.$emit('child-tell-me-something',this.message2);
			}
		}
	}
</script>

<style>
	h1{ color: #42b983;}
</style>