var rou = new VueRouter({
				//固定的选项 routes, 表示多个路由route
				routes:[
					{
						path:"/",
						component:index
					},
					{
						path:"/index",
						component:index
					},{
						path:"/faxian",
						component:faxian
					},
					{
						path:"/quanzi",
						component:quanzi
					}
				]
			})