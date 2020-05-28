<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane v-for="item in linkArr" :label="item.title" :key="item.title" :name="item.title">
				<ul class="linkBox" v-if="item.link.length > 0">
					<li v-for="item2 in item.link" :key="item2.title" @click="toOtherPage(item.title, item2.link)">
						<!-- <el-link :href="baseLink+item2.link">{{item2.title}}</el-link> -->
						{{item2.title}}
					</li>
				</ul>
				<p v-if="item.link.length==0">努力开发中~~~</p>
			</el-tab-pane>
		</el-tabs>
		<el-dialog title="请在手机端打开" :visible.sync="dialog.ifshow" width="30%" :show-close='dialog.showClose'>
			<div class="text">扫描以下二维码打开</div>
			<div class="erweima"><qriously :value="erweima.url" :size="erweima.size" /></div>
			
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialog.ifshow = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>

	export default{
		data(){
			return {
				linkArr:[],
				baseLink:"http://www.guoliangjie.com/",
				activeName: '1',
				erweima: {
					url: 'http://www.baidu.com',
					size: 200
				},
				selectUrl: 'http://www.baidu.com',
				dialog: {
					ifshow: false,
					showClose: false
				}
			}
		},
		methods:{
			toOtherPage(title, link) {
				if (title === '移动端效果') {
					if (!this.ifMobile) {
						this.erweima.url = this.baseLink + link;
						this.dialog.ifshow = true;
					}
				}
				else {
					if (this.ifMobile) {
						this.$message.error('请在PC端打开');
					}
					else {
						location.href = this.baseLink + link;
					}
				}
			},
		},
		async mounted() {
			const { data } = await this.$get("/json/codelink.json");
			this.linkArr=data;
			this.activeName=data[0].title;
			var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
			this.ifMobile = !!Agents.find(item => navigator.userAgent.indexOf(item) > 0);
		},
	}
	
</script>

<style scoped="scoped">
	.linkBox li{
		padding: 3px 0;
		cursor: pointer;
	}
	p{
		padding-left: 20px;
		color: red;
	}
	.text {
		text-align: center;
		color: red;
	}
	.erweima {
		width: 200px;
		margin: 20px auto 0;
	}
</style>
