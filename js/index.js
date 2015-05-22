//Javascript
$(function(){
	$(window).load(function(e){
		if(location.hash=='')
			location.hash = '#wifilist';
		ifdisplay();
	});
	
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
	
	$('.has-menu li a').click(function(e){
		$('.has-menu').addClass('current').siblings().removeClass('current');
	});



	//select
	jQuery.fn.select = function(options){ 
        return this.each(function(){ 
            var $this = $(this); 
            var $shows = $this.find(".shows"); 
            var $selectOption = $this.find(".selectOption"); 
            var $el = $this.find("ul > li"); 
                                       
            $this.click(function(e){ 
                $(this).toggleClass("zIndex active"); 
                $(this).children("ul").toggleClass("dis"); 
                e.stopPropagation(); 
            }); 
               
            $el.bind("click",function(){ 
                var $this_ = $(this); 
                    
                $this.find("span").removeClass("gray"); 
                $this_.parent().parent().find(".selectOption").text($this_.text());
                //display or not
				ifdisplay();
            }); 
               
            $("body").bind("click",function(){ 
                $this.removeClass("zIndex"); 
                $this.find("ul").removeClass("dis");     
            }) 
               
        //eahc End   
        }); 
           
    } 
    $(".selectContainer").select();  

    function ifdisplay(){
    	$cur = $('.ifdisplay1').html();
    	switch($cur){
    		case '固定IP':
    			$('#pppoe-name,#pppoe-pw').attr('disabled','disabled').css('opacity','.3');
    			break;
    		case '动态获取':
    			$('.form>p input').attr('disabled','disabled').css('opacity','.3');
    			break;
    		case 'PPPOE':
    			$('#pppoe-name,#pppoe-pw').removeAttr('disabled').css('opacity','1');
    			$('#ip,#mask,#gate').attr('disabled','disabled').css('opacity','.3');
    			break;
    		default:
    			
    			break;

    	}

    	$cur2 = $('.ifdisplay2').html();
    	switch($cur2){
    		case '不加密':
    			$('#wifi-pw').attr('disabled','disabled').css('opacity','.3');
    			break;
    		default:
    			$('#wifi-pw,#wifi').removeAttr('disabled').css('opacity','1');
    			break;

    	}
    }
    
});

