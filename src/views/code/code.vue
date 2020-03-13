<template>
	<div>
		<el-tabs v-model="activeName">
		    <el-tab-pane v-for="(item,index) in linkArr" :label="item.title" :key="item.title" :name="item.title">
				<ul class="linkBox" v-if="item.link.length>0">
					<li v-for="item2 in item.link" :key="item2.title">
						<el-link :href="baseLink+item2.link">{{item2.title}}</el-link>
					</li>
				</ul>
				<p v-if="item.link.length==0">努力开发中~~~</p>
			</el-tab-pane>
		  </el-tabs>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				linkArr:[],
				baseLink:"http://www.guoliangjie.com/",
				activeName: '1'
			}
		},
		methods:{
			
		},
		async mounted() {
			const { data } = await this.$get("/json/codelink.json");
			this.linkArr=data;
			this.activeName=data[0].title;
		}
	}
	
</script>

<style scoped="scoped">
	.linkBox li{
		padding: 3px 0;
	}
	p{
		padding-left: 20px;
		color: red;
	}
</style>
