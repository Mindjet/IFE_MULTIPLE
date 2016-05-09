
score = [

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	},

	{
		"name":"小明",
		"CN":80,
		"MA":90,
		"EN":70,
		"TOT":240
	},

	{
		"name":"小红",
		"CN":90,
		"MA":60,
		"EN":90,
		"TOT":240
	},

	{
		"name":"小亮",
		"CN":60,
		"MA":100,
		"EN":70,
		"TOT":230
	}
	
];

function renderTable(){

	if (document.getElementsByTagName('table').length==0) {

		var table = document.createElement('table');
		table.id = 'table';
		document.getElementsByTagName('body')[0].appendChild(table);

		var thead = document.createElement('thead');
		thead.id = 'thead';
		thead.appendChild(buildTh('姓名'));
		thead.appendChild(buildTh('语文','CN'));
		thead.appendChild(buildTh('数学','MA'));
		thead.appendChild(buildTh('英语','EN'));
		thead.appendChild(buildTh('总分','TOT'));

		table.appendChild(thead);
		arrowEvent();
	};

	table.appendChild(buildTbody());

}

function buildTbody(){

	var tbody = document.getElementById('tbody')?document.getElementById('tbody'):document.createElement('tbody');
	tbody.id = 'tbody';
	tbody.innerHTML = '';
	for (var i = 0; i < score.length; i++) {
		tbody.appendChild(buildTr(i));
	};
	return tbody;

}

function buildTr(index){

	var tr = document.createElement('tr');
	for(var key in score[index]){
		var td = document.createElement('td');
		td.innerText = score[index][key];
		tr.appendChild(td);
	}
	return tr;
}

function buildTh(name,clsName){

	var th = document.createElement('th');
	th.className = clsName;

	var text = document.createElement('span');
	text.innerText = name;

	var upArrow = document.createElement('div');
	upArrow.className = 'upArrow';

	var downArrow = document.createElement('div');
	downArrow.className = 'downArrow';

	th.appendChild(text);
	if (name!='姓名') {
		th.appendChild(upArrow);
		th.appendChild(downArrow);
	};
	
	return th;

}

function arrowEvent(){

	var upArrowList = getByClass('upArrow', null);
	for (var i = 0; i < upArrowList.length; i++) {

		upArrowList[i].onclick=function(){
			sort_inc(event.target.parentNode.className);
			buildTbody();
		}

	};

	var downArrowList = getByClass('downArrow', null);
	for (var i = 0; i < downArrowList.length; i++) {

		downArrowList[i].onclick = function(){
			sort_dec(event.target.parentNode.className);
			buildTbody();
		}

	};

}

// sort the score by specific subject and order it by increse
function sort_inc(subject){

	for (var i = 0; i < score.length; i++) {
		for (var j = i+1; j < score.length; j++) {
			if (score[i][subject]>score[j][subject]) {
				swap(score, i , j);
			};
		};
	};

}

//sort the score by specific subject and order it by decrease
function sort_dec(subject){

	for (var i = 0; i < score.length; i++) {
		for(var j=i+1; j<score.length; j++){
			if (score[i][subject]<score[j][subject]) {
				swap(score, i, j);
			};
		}
	};

}

function swap(array, a, b){

	var temp = array[a];
	array[a] = array[b];
	array[b] = temp;

}

function freezeHead(){

	window.onscroll = function(){

		var table = document.getElementById('table');
		myTop = table.offsetTop;
		myLeft = table.offsetLeft;
		tHeight = table.offsetHeight;

		var thead = document.getElementById('thead');
		if (window.pageYOffset>myTop) {

			myWidth = thead.offsetWidth;
			thead.style.position = 'fixed';
			thead.style.left = myLeft+'px';
			thead.style.top = '0px';
			thead.style.width = myWidth + 'px';

			for (var i = 0; i < thead.children.length; i++) {
				thead.children[i].style.width = myWidth/thead.children.length+'px';
			};

		};

		if (window.pageYOffset<myTop||window.pageYOffset>(tHeight+myTop+10)) {

			thead.style.position = 'static';

		};
	}

}


function getByClass(clsName, parentId){

	var parent = document.getElementById(parentId)?document.getElementById(parentId):document;
	var target = [];
	eles = parent.getElementsByTagName('*');
	for (var i = 0; i < eles.length; i++) {
		if(eles[i].className == clsName)
			target.push(eles[i]);
	};
	return target;
}

window.onload = function(){

	renderTable();
	freezeHead();

}