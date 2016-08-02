import $ from 'jquery';
function numStart(obj,num){
	if (num=='00') {
		obj.html('暂无评分')
	}
	if (num>=10) {
		obj.find('li').first().addClass('yellow-star');
	};
	if (num>=20) {
		obj.find('li').eq(0).addClass('yellow-star');
		obj.find('li').eq(1).addClass('yellow-star');
	};
	if (num>=30) {
		obj.find('li').eq(0).addClass('yellow-star');
		obj.find('li').eq(1).addClass('yellow-star');
		obj.find('li').eq(2).addClass('yellow-star');
	};
	if (num>=40) {
		obj.find('li').eq(0).addClass('yellow-star');
		obj.find('li').eq(1).addClass('yellow-star');
		obj.find('li').eq(2).addClass('yellow-star');
		obj.find('li').eq(3).addClass('yellow-star');
	};
};