
var data = {

	"小明":["80","90","70","240"],
	"小红":["90","60","90","240"],
	"小亮":["60","100","70","230"]

}

function renderTable(){

	if (document.getElementsByTagName('table').length==0) {
		var table = document.createElement('table');
		document.getElementsByTagName('body')[0].appendChild(table);
		var thead = document.createElement('thead');
		
		thead.appendChild(buildTh('姓名'));
		thead.appendChild(buildTh('语文',0));
		thead.appendChild(buildTh('数学',1));
		thead.appendChild(buildTh('英语',2));
		thead.appendChild(buildTh('总分',3));

		table.appendChild(thead);
	};

	var tbody = document.createElement('tbody');
	for(var key in data)
		tbody.appendChild(buildTr(key));

	table.appendChild(tbody);

}

function buildTh(name,index){


	var th = document.createElement('th');
	th.className = index;

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

function buildTr(key){

	var tr = document.createElement('tr');

	// add the name as the first item when creating a new row
	var name = document.createElement('td');
	name.innerText = key;
	tr.appendChild(name);

	//add the other items
	for (var i = 0; i < data[key].length; i++) {
		tr.appendChild(buildTd(data[key][i]));
	}
	return tr;

}

function buildTd(text){

	var td = document.createElement('td');
	td.innerText = text;
	return td;

}

function click_inc(){

	var upArrowList = getByClass('upArrow', null);
	for (var i = 0; i < upArrowList.length; i++) {
		upArrowList[i].onclick = function(){

			// event.target.parentNode.className; 要排序的是第几个
			// data = {};
			sort

		}
	};

}

function getByClass(clsName, parentId){

	parent==null?document:document.getElementById(parentId);
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

}