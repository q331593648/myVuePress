module.exports = {
	title: 'bolg', // 设置网站标题
	dest: './dist', // 设置输出目录
	base: '/wy/', // 设置站点根路径
	head: [
		['link', {
			rel: 'icon',
			href: '/logo.jpg'
		}]
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
			{
				text: '小程序',
				items: [
          { text: '微信小程序', link: '/HybridApp/WeApp' },
          { text: 'UniApp', link: '/HybridApp/UniApp' }
        ]
			}, 
			{
				text: 'JavaScript',
				link: '/JavaScript/'
			},
			{
				text: 'Vue',
				link: '/Vue/'
			},
			{
				text: 'Node',
				link: '/Node/'
			},
			{
				text: 'Github',
				link: 'https://github.com/q331593648/myVuePress'
			}
		],
		//侧边栏分组
		sidebar: [
				['/Vue/', 'Vue'],
				['/Vue/Vue-router', 'Vue-router'],
				['/Vue/Axios', 'Axios'],
				['/Vue/Vuex', 'Vuex'],
				['/Vue/Vue-i18n', 'Vue-i18n']
			],
		//搜索设置
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: true,
	}
}
