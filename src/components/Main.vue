<template>
	<div class="Main">
		<!-- <layout>
			<h1 slot="header">{{msg}}</h1>
			<p>some text in here ...</p>
			<p>some text in here ...</p>
			<h3 slot="footer">{{msg2}}</h3>
			<p>some text in here ...</p>
		</layout> -->
		<!-- <test4></test4> -->
		<!-- <test5></test5> -->
		<test6></test6>
	</div>
</template>

<script>
import Layout from './layout';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';

export default {
	name:'Main',
	data(){
		return {
			msg:"header",
			msg2:'footer'
		}
	},
	components:{
		Layout,
		Test3,
		Test4,
		Test5,
		Test6
	}
}	
</script>