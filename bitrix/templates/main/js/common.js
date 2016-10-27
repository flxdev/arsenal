$(document).ready(function() {

function DesktopMenu(){

	var mainCont = $('.c-menu-block.main'),
		items = mainCont.find('.js-desktop-hover'),
		targetWrap = $('.menu-dropdown-wrapper'),
		targetItems = targetWrap.find('.menu-dropdown-cont'),
		shown = 'is-shown',
		current = 'is-current';

	items.each(function(){
		var _ = $(this),
			link = _.find('a'),
			id = parseInt(link.data('elem'));
			_.on('mouseenter',function(){
				_.addClass('active').siblings().removeClass('active');
				targetWrap.addClass(shown);
				targetWrap.find("[data-elem="+ id +"]").addClass(current).siblings().removeClass(current);
			})
	});
	mainCont.add(targetWrap).on('mouseleave',function(){
		setTimeout(function(){
				if ($('.menu-dropdown-wrapper:hover').length != 1 && !$('.c-menu-block.main:hover').length != 0 ) {
			    targetWrap.removeClass(shown);
			    items.removeClass('active')
			}
		},1)

	})
} DesktopMenu();

function MobileMenu(){
	
	var maintogle = $('.js-menu-toggle'),
			subtogle = $('.js-sub-toggle');

		subtogle.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		maintogle.on('click',function(){
			$(this).toggleClass('active')
		})
} MobileMenu();

function MobileAbout(){
	
	var togle = $('.cart_wrap-modaltrigger'),
		target = $('.header_mobile-contacts'),
		closer = $('.js-modaltrigger-close');

		togle.on('click',function(){
			target.addClass('is-visible');
		})
		closer.on('click',function(){
			target.removeClass('is-visible');
		})
} MobileAbout();

function FocusInput(){
	
	var input = $('.search__input');

		input.each(function(){
			var _ = $(this);
			_.on('focus',function(){
				var parent = _.parent();
				parent.addClass('in-focus');

				_.focusout(function(){
					parent.removeClass('in-focus')
				})
			})
		})
} FocusInput();

(function(){

	var mainHeader = $('.out .cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 250;

	$('.out').on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $('.out').scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop)
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
	    if (previousTop - currentTop > scrollDelta) {
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	mainHeader.addClass('is-hidden');
	    }
	}
})();

function jshover(){
	
	var togle = $('.js-hover'),
			target = togle.find('.dropdown-target'),
			timeout = 250;

			togle.on('mouseenter', function(){
				var _ = $(this);
				setTimeout(function(){
					_.addClass('active');
					target.addClass('active');
				},timeout);
			});


		togle.on('mouseleave',function(){
			setTimeout(function(){
						console.log()
						if ((target+':hover').length != 0 && (togle+':hover').length != 1 ) {
				    target.add(togle).removeClass('active');
				    timeout = timeout;
				}
			},251);
		});
} jshover();

function compareHeight(){
	$('.categories-elem-outer .categories-elem').matchHeight({
		 property: 'min-height'
	});
	$('.slider-section-inner .product-card-inner').matchHeight({
		 property: 'min-height'
	});
} compareHeight();

function Tabs(){
if($('.js-tabs-wrap').length){

	var parent = $('.js-tabs-wrap'),
			trigger = parent.find('.js-tab-trigger'),
			tabbody = parent.find('.tabs-body'),
			tabcont = tabbody.find('.tabs-cont');

	tabcont.not(":first").hide();

	trigger.on('click',function(){

		var _ = $(this);

		if(!_.hasClass('active')){
			_.addClass('active').siblings().removeClass('active')
			tabcont.hide().eq($(".js-tab-trigger.active").index()).fadeIn().find('.slick-slider').slick('setPosition');
		}
	}).eq(0).addClass("active")
}
} Tabs();



});
//end of document ready

function slidesCount(elem){
	var container = elem.parent().find('.cards-slider-counter'),
			curSlideCont = container.find('.cards-slider-current'),
			totatSlideCont= container.find('.cards-slider-total'),
			btns = elem.parent().find('.cards-slider-nav'),
			pages;

    elem.on('init reInit breakpoint beforeChange', function (event, slick, currentSlide, nextSlide) {
    	var slidesShown = parseInt(slick.slickGetOption('slidesToShow')),
 					slidesScroll = parseInt(slick.slickGetOption('slidesToScroll')),
 					slidesNext = parseInt(nextSlide),
    			totalSlides = parseInt(slick.slideCount),
    			totalPages = Math.ceil(totalSlides / slidesShown),
  				curPage = event.type == 'init'? 0 : parseInt(slidesNext/slidesScroll);
    			totatSlideCont.text(totalPages)
 					curSlideCont.text(curPage + 1)
 					console.log(slidesNext)
    });
   //  function disable(item){
   //  	item.addClass('disabled');
			// setTimeout(function(){
			// 	item.removeClass('disabled');
			// },400);
   //  }

    // btns.on('click', '.slick-arrow',function(event){
    // 	var count = parseInt(curSlideCont.text()),
    // 			_ = $(this);
	   //  			if(_.hasClass('carousel-next') && count < pages && !_.hasClass('disabled')){
	   //  				count += 1;

	   //  				curSlideCont.text(count)
	   //  				disable(_)
	   //  			}
	   //  			else if(_.hasClass('carousel-prev') && count > 1 && !_.hasClass('disabled')){
	   //  				count -= 1;

	   //  				curSlideCont.text(count)
	   //  				disable(_)
	   //  			}
    // });
}