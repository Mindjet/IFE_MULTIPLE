
function get(id){
	return document.getElementById(id);
}

function print(text){
	console.log(text);
}

function autoCenter(ele){

	ele.style.left = document.documentElement.clientWidth/2-ele.offsetWidth/2+'px';
	ele.style.top = document.documentElement.clientHeight/2-ele.offsetHeight/2+'px';

}

function click_show(){

	get('login').onclick = function(){
		get('popup').style.display = 'block';
		autoCenter(get('popup'));
		get('mask').style.display = 'block';
		get('mask').style.height = document.body.clientHeight+'px';
	}

}

function click_hide(){

	get('mask').onclick = get('close').onclick = get('confirm').onclick = get('cancel').onclick = function(){
		get('popup').style.display = 'none';
		get('mask').style.display = 'none';
	}
}

function click_drag(){

	get('head').onmousedown = function(){
		gapX = event.clientX - get('popup').offsetLeft;
		gapY = event.clientY - get('popup').offsetTop;

		get('popup').onmousemove = document.onmousemove= function(){
			move(gapX,gapY);
		}

		get('popup').onmouseup = document.onmouseup = function(){
			this.onmousemove = null;
			this.onmouseup = null;
			this.style.cursor = 'default';
		}
		
	}
}

function move(gapX,gapY){
	var popup = get('popup');
	popup.style.cursor = 'move';

	var correctX = event.clientX - gapX;
	var correctY = event.clientY - gapY;

	if (correctX<10) {
		correctX = 10;
	}else if (correctX>(document.documentElement.clientWidth-popup.offsetWidth-10)) {
		correctX = document.documentElement.clientWidth-popup.offsetWidth-10;
	};

	if (correctY<10) {
		correctY = 10;
	}else if (correctY>(document.documentElement.clientHeight-popup.offsetHeight-10)) {
		correctY = document.documentElement.clientHeight-popup.offsetHeight-10;
	};

	print(correctX);

	popup.style.left = correctX + 'px';
	popup.style.top = correctY+ 'px';

}

window.onload = function(){
	click_show();
	click_hide();
	click_drag();
}