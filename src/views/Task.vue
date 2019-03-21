<template>
	<el-container style="height: 100%; border: 1px solid #eee">
		<el-header>趣考网络</el-header>
		<el-container>
			<el-aside width="200px">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-aside>
			<el-main><span v-html="markdown"></span></el-main>
		</el-container>
		<el-footer>提交作业</p></el-footer>
	</el-container>
</template>

<script>
	import {
		markdown
	} from 'markdown';
	export default {
		data() {
			return {
				markdown: markdown.toHTML("# Hello *World*!\n- jjjjj\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf\n##jfjjf"),
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style>
	.el-header {
		border-style: solid; 
		border-width: 0 0 1px 0 ;
	}
	.el-aside {
		border-style: solid; 
		border-width: 0 1px 0 0;
		margin : 0 40px 0 0;
		height: 100%;
	}
	.el-footer{
		border-style: solid; 
		border-width: 1px 0 0 0 ;
		align: "right";
	}
</style>
