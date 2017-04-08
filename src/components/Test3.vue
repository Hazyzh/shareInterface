<template>
	<div>
		<p>hellp</p>
		<transition name="fade">
			<p v-show="active">
				hello world !
			</p>
		</transition>
		<button v-on:click="myFun">click</button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			active:true,
		}
	},
	methods:{
		myFun(){
			this.active = !this.active;
		}
	}
}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 0.5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>