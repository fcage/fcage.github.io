var fc = function(fc){
	var curNav;
	
	fc.init = function(){
		//load, init, add event handlers
		
		$('.nav-circle').on('mouseover', function(){
			
			$('body,html').animate({
				scrollTop: $( $(this).attr('id').replace('nav-', '#') ).offset().top
			}, 300);
			
		})
		
		$('#scroll').on('click', function(){
			$('body,html').animate({
				scrollTop: $('#block-8').offset().top
			}, 300);
		})
		
		$('#more-bio-button').on('click', function(){
			$(this).slideUp();
			
			$('.more-bio').slideDown()
			
		})
		
		
		document.addEventListener("touchmove", manageNav, false);
		document.addEventListener("scroll", manageNav, false);
		manageNav();
	}
	
	var manageNav = function(){
		var scrollTop = $(window).scrollTop();
		var blocks = $('.block')
		for(var b = 0; b < blocks.length; b++){
			var block = $(blocks[b])
			
			var top = block.offset().top
			var bot = top + block.outerHeight()

			if( top >= scrollTop  || bot - 100 > scrollTop   ){
				if(curNav != block.attr('id')){
					$('#nav-' + curNav).attr('class', 'nav-circle')
					curNav = block.attr('id');
					$('#nav-' + curNav).attr('class', 'nav-circle selected')
					
				}
				break;
			}
			
		}
		
	}
	
	
	
	$(document).ready(function(){
		fc.init()
	})
	
	return fc;
	
}(fc || {})