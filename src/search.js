import $ from 'jquery';
$(function(){
	$('#searchValue').on("blur",function(){
		var val = $(this).val();
		var code = encodeURI(encodeURI(val));
	    location.href = 'list.html?search='+code+'';
	});
	//点击出现搜索
	$('#search').on("click",function(){
		if ($('.HeaderNav').hasClass('isActive')) {
			$('.HeaderNav').removeClass('isActive');
			$('.TalioSeach').hide();
			$('.TalioLayer').hide();
		}else{
			$('.HeaderNav').addClass('isActive');
			$('.TalioSeach').show();
			$('.TalioLayer').show();
		};
	});
})

