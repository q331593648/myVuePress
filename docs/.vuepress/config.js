module.exports = {
	title: 'bolg', // 设置网站标题
	dest: './dist', // 设置输出目录
	base: '/', // 设置站点根路径
	head: [
		['link', {
			rel: 'icon',
			href: '/logo.jpg'
		}]
	],
	plugins: [
		require('es6-promise').polyfill(),
		require('isomorphic-fetch')
		
  ],
	repo: 'https://github.com/q331593648/myVuePress.git', // 添加 github 链接
	description: '个人记录学习',
	themeConfig: {
		navbar: true, //顶部导航条
		nav: [ //顶部导航路由
			{
				text: '首页',
				link: '/'
			},
		// 	{
		// 		text: '小程序',
		// 		items: [
        //   { text: '微信小程序', link: '/HybridApp/WeApp' },
        //   { text: 'UniApp', link: '/HybridApp/UniApp' }
        // ]
		// 	}, 
			{
				text: 'JavaScript',
				link: '/JavaScript/'
			},
		// 	{
		// 		text: 'Css',
		// 		link: '/Css/'
		// 	},
		// 	{
		// 		text: 'Vue',
		// 		link: '/Vue/'
		// 	},
		// 	{
		// 		text: 'Node',
		// 		link: '/Node/'
		// 	},
			{
				text: '资料',
				items:[
					{ text: '常用链接', link: '/Links/' },
					{ text: '常见问题', link: '/Problems/' },
					{ text: '文章收藏', link: '/Collection/' },
				]
			},
			{
				text: '代码规范',
				link: '/CodeStyle/'
			},
			// {
			// 	text: '常见问题',
			// 	link: '/Problems/'
			// },
			// {
			// 	text: '文章收藏',
			// 	link: '/Collection/'
			// },
			{
				text: 'Github',
				link: 'https://github.com/q331593648/myVuePress'
			}
		],
		//侧边栏分组
		sidebar: {
			'/Vue/':getVueList(),
			'/Node/':getNodeList(),
			'/JavaScript/':getJsList(),
			'/Css/':getCssList()
		},
		//搜索设置
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: true,
	}
}

function getCssList () {
	return [
			['/Css/', 'css初始化'],
			['/Css/css-exp', '常用css例子'],
	]
}
function getVueList () {
	return [
			['/Vue/', 'Vue'],
			['/Vue/Vue-router', 'Vue-router'],
			['/Vue/Axios', 'Axios'],
			['/Vue/Vuex', 'Vuex'],
			['/Vue/Vue-i18n', 'Vue-i18n']
	]
}
function getNodeList () {
	return [
			['/Node/', 'Node'],
			['/Node/Express', 'Express'],
			['/Node/Koa', 'Koa']
	]
}
function getJsList () {
	return [
			['/JavaScript/','JS'],
			['/JavaScript/Api', 'WebApi'],
			['/JavaScript/Number', '数字和日期对象'],
			['/JavaScript/String', '字符串'],
			['/JavaScript/Array', '数组'],
			['/JavaScript/Object', '对象'],
			['/JavaScript/RegExp', '正则'],
			['/JavaScript/Other', '其他']
	]
}