//第一个参数：轮播对象的选择器
//第二个参数：设置的配置项          
var mySwiper = new Swiper(".swiper-container", {
	//自动循环:3000毫秒，切换一次图片
	autoplay: 3000,
	//是否为无缝滚动
	loop: true,
	//指定分页组件
	pagination: ".swiper-pagination",
	//点击小按钮，实现切换图片的效果
	paginationClickable: true,
	//点击后，轮播图继续轮播
	autoplayDisableOnInteraction: false,
})
/*第二个轮播图*/
let sectionLeft = document.getElementsByClassName('section-top2-2-4')[0];
let sectionRight = document.getElementsByClassName('section-top2-2-5')[0];
let sectionOut = document.getElementsByClassName('section-top-out')[0];
let target = 0;
sectionLeft.onclick = function() {
	target -= 210;
	//target进行临界点判断
	if(target <= -210 * 3) {
		//停
		target = -210 * 3;
	}
	animate(sectionOut, target);
}
sectionRight.onclick = function() {
	target += 210;
	//target进行临界点判断
	if(target >= 0) {
		//停
		target = 0;
	}
	animate(sectionOut, target);
}
/*封装动画*/
function animate(obj, target) {
	//开启定时器之前，先做下清除
	clearInterval(obj.timer); //具体标注下哪个对象的定时器
	var speed = (target > obj.offsetLeft) ? 10 : -10;
	obj.timer = setInterval(function() {
		//保存了一个差值
		var result = target - obj.offsetLeft;
		//运动公式
		obj.style.left = obj.offsetLeft + speed + "px";
		if(Math.abs(result) <= 10) {
			obj.style.left = target + "px";
			clearInterval(obj.timer);
		}
	}, 50);

}