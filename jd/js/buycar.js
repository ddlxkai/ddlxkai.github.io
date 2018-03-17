function $tag(ele,parent){
	if(parent){
		return parent.getElementsByTagName(ele)
	}
	else{
		return document.getElementsByTagName(ele)
	}
}
function $(selector,parent){
	if(/^\.[-_0-9a-zA-Z]+$/.test(selector)){
		var str=selector.substr(1)
		if(document.getElementsByClassName){
			if(parent){
				return parent.getElementsByClassName(str)
			}
			else{
				return document.getElementsByClassName(str)
			}
		
		}
		else{
			
			if(parent){
				var all=parent.getElementsByTagName('*');
				var arr=[];
				for(var i=0;i<all.length;i++){
					if(all[i].className==str){
						arr.push(all[i])
					}
				}
			}
			else{
				var all=document.getElementsByTagName('*');
				var arr=[];
				for(var i=0;i<all.length;i++){
					if(all[i].className==str){
						arr.push(all[i])
					}
				}
				return arr
			}
		}
	}
		else if(/^#[-_0-9a-zA-Z]+$/.test(selector)){
		var str=selector.substr(1)
		return document.getElementById(str)
	}
	else {
		if(parent){
			return parent.getElementsByTagName(selector)
		}
		else{
			return document.getElementsByTagName(selector)
		}
	}
}
function $id(id){
	return document.getElementById(id)
}

function $class(cName){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(cName)
	}
	else{
		var all=document.getElementsByTagName('*');
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(all[i].className==cName){
				arr.push(all[i])
			}
		}
		return arr
	}
}


function create(ele){
	return document.createElement(ele)
}

function getStyle(ele,attr){
	if(window.getComputedStyle){
		return getComputedStyle(ele,null)[attr]
	}
	else{
		return ele.currentStyle[attr]
	}
}

function randomColor(){
	var res='#';
	for(var i=0;i<6;i++){
		res+= parseInt(Math.random()*16).toString(16);
	}
	return res
}








	//检测滚动距离
	function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}



//阻止冒泡
	//兼容处理
	function stopPro (event) {
		//兼容处理浏览器  阻止冒泡
		var e = event || window.event;
		if (e.stopPropagation) {
			//标准浏览器
			e.stopPropagation();
		} else {
			//IE浏览器
			e.cancelBubble = true;
		}
	}

	//添加2级事件
	
	function addevent(target,eve,fn,bool){
			bool=bool || false;
			if(target.addEventListener){
				target.addEventListener(eve,fn,bool)
			}
			else{
				target.attachEvent('on'+eve,fn)
			}
	}
	

	//阻止默认行为
	
	function preventDefault(event){
		var e=event || window.event;
		if(e.preventDefault){
			e.preventDefault()
		}
		else{
			e.returnValue=true;
		}
	}
