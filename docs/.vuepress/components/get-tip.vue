<template>
	<div class="test">
		<p>
			{{list.hitokoto}} 
		</p>
		<p style="text-align:right">
			by - {{list.creator}} &nbsp;&nbsp;&nbsp; from - {{list.from}}
		</p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			list:[]
		}
	},
		created(){
			fetch("https://v1.hitokoto.cn/")
    	.then(response => response.json())//把response这个对象解析成正常我的可读的状态(为可读流)
    	.then(data => this.list = data)//解析之后打印出来是所有返回的数据 
		}
}
</script>


<style scoped>


</style>

