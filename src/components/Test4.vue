<template>
	<div>
		<h1>Colsure !</h1>
		<ul>
			<li v-for="item in lists" @click="checkFun(item)">
				<input type="checkbox" v-model="item.ischecked">
				名称:<span>{{item.name}}</span>
				单价:<span>{{item.price | formatMoney}}</span>
				数量:<span>{{item.number}}</span>
				金币:<span>{{item.price*item.number | formatMoney('元')}}</span>
				<button @click="myFun(item)">+</button>
			</li>
		</ul>
		<label for="itemsall">全选:</label><input type="checkbox" id="itemsall" v-model="checkAllFlag" @click="checkAllFun"><p>总计:{{goodsall|formatMoney('元')}}</p>
	</div>
</template>

<script>
var lists = [
	{name:'phone',price:221,number:1},
	{name:'cup',price:12,number:1},
	{name:'computer',price:3200,number:1}
]

export default {
	data(){
		return {
			message:"My vue test hehlo!",
			lists:lists,
			checkAllFlag:false
		}
	},
	filters:{ 
	   	formatMoney:function(value,type){
	       return "￥"+value.toFixed(2)+(type||'');
	   	}
	},
	computed:{
		goodsall(){
			var num = 0;
			this.lists.forEach(function(item){
				if(item.ischecked){
					num += item.price*item.number;	
				}
			})
			return num;
		}
	},
	methods:{
		myFun(a){
			
		},
		checkFun(a){
			if(typeof(a.ischecked)==='undefined'){
				this.$set(a,'ischecked',true);
			}else{
				a.ischecked = !a.ischecked;
				if(!a.ischecked){
					this.checkAllFlag = false;
				}
			}
			var all = true;
			this.lists.forEach(function(item){
				if(!item.ischecked){
					all = false;
				}
			})
			this.checkAllFlag = all;
		},
		checkAllFun(){
			this.lists.forEach(function(item){
				if(typeof(item.ischecked)==='undefined'){
					this.$set(item,'ischecked',true);
				}else{
					item.ischecked = true;
				}
			})
		}
	}
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li{
	margin: 10px 0px;
}

span{
	margin: 0 40px 0 0;
}

a {
  color: #42b983;
}
</style>