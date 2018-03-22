let index = Vue.component('index', {
	template: `<div class='wrap1'>
	<div  v-for="(item,index) in list" :key='index'>
       <div class="s_top">
			<div class="fl">
		        <img :src='item.user_img'/> 
		        <span>{{item.name}}</span>
			</div>
			<div class="fr quanClass">{{item.circleName}}</div>
		</div>
		<div class="s_title"><span class="jh">精华</span>
		  <span class="fslarge">{{item.title}}</span>
		</div>
		<div class="s_image" v-for="(item,index) in item.img_list">
			<img :src='item'/>			
		</div>
		<div class="s_say">
			<img src="img/message.png"/>
			<img src="img/message.png"/>
			<span class="whoSay">{{item.info_name}}</span>：<span class="saySomething">{{item.info}}</span>
		</div>
		<hr />
		<div class="s_bottom">
			<div class="fl" style="color: #AAABAF;">
			   <span>{{item.time}}</span>
			   <span class="sreadnum">{{item.red_num}}</span> 
			   <span> 阅</span>
			</div>
			<div class="fr zanl">
				<span>
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-xiaoxi"></use>
					</svg>
					<span>{{item.comment}}</span>
				</span>
				<span>
					<svg class="icon" aria-hidden="true"> 
						<use xlink:href="#icon-zan"></use>
					</svg>
					<span>{{item.praise}}</span>
				</span>
			</div>
		</div>
	</div>
	</div>`,
	data: function() {
		return {
			list:[]
		}
	},
	created: function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "js/index.json");
		xhr.send();
		var that =this;
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				var result = JSON.parse(xhr.responseText);
				var list = result.trends;
				that.list = list
			}
		}

	}
})
let faxian = Vue.component('faxian', {
	props: ['activeIndex'],
	template: `<div>
				<div class="discover">				  
					<div><img src="img/index/31.jpg" /></div>
					<div>
						<ul>
							<a href="javascript:;"><li><p><img src="img/classify/qinggan.png" /></p>情感</li></a>
							<a href="javascript:;"><li><p><img src="img/classify/gaoxiao.png" /></p>搞笑</li></a>
							<a href="javascript:;"><li><p><img src="img/classify/shenghuo.png" /></p>生活</li></a>
							<a href="javascript:;"><li><p><img src="img/classify/mingxing.png" /></p>明星</li></a>										
							<a href="javascript:;"><li><p><img src="img/classify/wenxue.png" /></p>文学</li></a>			
							<a href="javascript:;"><li><p><img src="img/classify/xingzuo.png" /></p>星座命理</li></a>																					
							<a href="javascript:;"><li><p><img src="img/classify/erciyuan.png" /></p>二次元</li></a>																				
							<a href="javascript:;"><li><p><img src="img/classify/meitu.png" /></p>美图</li></a>							
							<a href="javascript:;"><li><p><img src="img/classify/youxi.png" /></p>游戏</li></a>
							<a href="javascript:;"><li><p><img src="img/classify/yundong.png" /></p>运动</li></a>
						</ul>
					</div>	
					
					
					<div class="fx_content" v-for='item in list1'>
					    <h4>{{item.title}}</h4>
						<div class="xqContent" v-for='item in item.data'>
							<div class="xq_left">
								<img :src='item.img' />
							</div>
							<div class="xq_center">
								<h4>{{item.title}}</h4>
								<p>{{item.titlep}}</p>
								<p><span>{{item.qy}}</span><span>{{item.tz}}</span></p>
							</div>
							<div class="xq_right">
							  <button class="gotosee">去看看</button>
							</div>
						</div>
						<p>查看更多</p>
					</div>
				</div>
			</div>`,
	data: function() {
		return {
			list1:[],
			list2:[],
		}
	},
	created: function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "js/index.json");
		xhr.send();
		var that =this;
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				var result = JSON.parse(xhr.responseText);
				var list1 = result.discover;
				console.log(list1[0].data);
				that.list1 = list1
			}
		}

	}

})
let quanzi = Vue.component('quanzi', {
	props: ['activeIndex'],
	template: `<div class="qz">
				<div class="qztop">
					<div class="fl">
						<img src="img/index/38.jpg"/>
					</div>
					<div class="fl">
						<h4>我狐简介</h4>
						<span>中国最大的互联网媒体平台,也是中国网民获取咨询的首选网络平台</span>
					</div>
				</div>
				
					
					<p>搜狐网为用户提供24小时不间断的最新咨询及搜索,邮件等网络服务.内容包括全球热点事件,突发新闻,时事评论,体育赛事,IT通讯等产业报道</p>
				    <p class='last'>目前搜狐已形成富有影响力与公信力的新闻财经中心,引领潮流的资讯中心,深受体育迷欢迎的体育中心,国内最权威的科技产业报道平台搜狐IT,以及中心,全频道的形式为大众提供最快速,真实和权威的科技产业报道平台</p>
			</div>`

})