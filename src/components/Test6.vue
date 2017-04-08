<template>
	<div>
		<h1>Checked!</h1>
		<dl v-for="(item,index) in shownumber" v-bind:class="{active:activeFlag==index}" @click="activeFlag=index">
			<dt>{{item.name}}</dt>
			<dd>{{item.price}}</dd>
			<dd>{{item.number}}</dd>
			<dd>
			<a href="javascript:" v-if="item.isDefault">默认地址</a>
			<a href="javascript:" v-else-if="activeFlag==index" @click="setDefault(index)">设为默认</a>
			</dd>
		</dl>
		<a href="javascript:" @click="limitNum=limitNum==lists.length?3:lists.length" :class="['load-more']">
			load more
		</a>
		<!-- <button @click="myfun">click</button> -->
	</div>
</template>

<script>
export default {
	data(){
		return {
			lists:[],
			activeFlag:0,
			limitNum:3
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.initList();
		})
	},
	computed:{
		shownumber(){
			return this.lists.slice(0,this.limitNum);
		}
	},

	methods:{
		setDefault(index){
			for(var i=0;i<this.lists.length;i++){
				if(i==index){
					this.lists[i].isDefault = true;	
				}else{
					this.lists[i].isDefault = false;	
				}
			}
		},
		myfun(){
			console.log(window.JSON.stringify(lists));
		},
		initList(){
			this.$http.get('static/listsJson.json').then((res)=>{
				this.lists = res.data;
			}).catch((err)=>{
				console.log(err)
			})
		}
	}
}
</script>

<style scoped>
	dl{
		border: 2px solid #333;
		display: inline-block;
		margin: 20px;
		padding: 10px;
		text-align: left;
		width: 160px;height: 100px;
		overflow: hidden;
	}
	.active{
		border-color:orange;
	}
	a{
		text-decoration: none;
		font-size: 14px;
		color: orange;
	}
	.load-more{
		display: block;
	}
</style>