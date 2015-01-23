//Javascript
$(function(){
	$('.wifilist li a').click(function(e){
		e.preventDefault();
		$('#pwrequired').fadeIn();
	});
	$('.btn.close').click(function(e){
		e.preventDefault();
		$('#pwrequired').fadeOut();
	});
	$('.remove').click(function(e){
		e.preventDefault();
		$(this).parent('li').fadeOut(500);
	});

	$('#navigation li a').click(function(e){
		$(this).parent('li').addClass('current').siblings().removeClass('current');
	});
	

});