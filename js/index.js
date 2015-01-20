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
});