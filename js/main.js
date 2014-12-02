var info = [];
var att = 0;

var un_checked = function() {
	var text = $('#todo-input').val();
	localStorage.setItem('data-id='+att,text)
	$('#todo-input').val('');
	var obj = {}
	obj.value = localStorage['data-id='+att];
	att++;
	info.push(obj);
	resetTemplate();
	addTemplate();
};
var checked = function() {
	var text = $('#todo-input').val();
	sessionStorage.setItem('data-id='+att,text)
	$('#todo-input').val('');
	var obj = {}
	obj.value = sessionStorage['data-id='+att];
	att++;
	info.push(obj);
	resetTemplate();
	addTemplate();
};
var addTemplate = function() {
	var source = $('#todo-Script').html();
	var template = Handlebars.compile(source);
	var html = template({todo:info})
	$('.todo-container').append(html)
};
var resetTemplate = function() {
	$('.todo-container').empty();
};

$(window).load(function() {
	var findData = [];
	var dataArray = []
	var localInfo = function() {
		for (var v in localStorage) {
			findData.push(v);
		}
	}
	localInfo();
	findData.forEach(function(x) {
		if (x.substr(0,4) == "data") {
			dataArray.push(x);
		}
	});
	var largest = 0;
	dataArray.forEach(function(y) {
		var dataObj = {};
		var num = parseInt(y.split('')[y.length-1]);  //continue
		dataObj.value = localStorage[y];
		info.push(dataObj);
		if (typeof num == "number" && largest < num) {
			largest = num;
		}
	att = num+1;	
	});
	addTemplate();
});
$('.todo-title').on('click','#todo-button',function() {
	var isChecked = $('#check').is(':checked');
	if (isChecked) {
		checked();	
	} else {
		un_checked();	
	}	
});	
$('.todo-title').on('click','#clear-button',function() {
	localStorage.clear();
	resetTemplate();
});
$('.todo-title').on('click','#finished-button',function() {
	var isChecked = function(x) {
		return $(x).is(':checked');
	}
	var checked = $('.check-list').is(':checked');
	var checkArray = $('.new-item-container').children();
	for (var i = 0; i < checkArray.length; i++) {
		if (checked) {
			localStorage.removeItem();
			sessionStorage.removeItem();
		}
	}
		
});























