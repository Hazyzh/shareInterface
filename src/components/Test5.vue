<template>
	<div>
		<h1>aa</h1>
		<p>{{msg}}</p>
		<input v-model="price" disabled="true">
		<button @click="x=10">click</button>
	</div>
</template>

<script>
export default {
	data(){
		return{
			msg:'hello',
			price:20
		}
	},
	methods:{
		myFun(){
			console.log(this.price++);
		}
	}
}
</script>