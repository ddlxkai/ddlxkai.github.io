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
					<div><img src="img/banner.jpg" /></div>
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
						<p>全部圈子</p>
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
						<img src="img/avatar/3.jpeg"/>
					</div>
					<div class="fl">
						<h4>杨老师发表的测试</h4>
						<span>1圈友</span><span>1帖子</span>
					</div>
				</div>
				<div>
					<span>+</span>
					<span>创建圈子</span>
				</div>
			</div>`

})