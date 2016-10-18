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
				targetWrap.addClass(shown);
				targetWrap.find("[data-elem="+ id +"]").addClass(current).siblings().removeClass(current);
			})
	});
	mainCont.add(targetWrap).on('mouseleave',function(){
		setTimeout(function(){
					if ($('.menu-dropdown-wrapper:hover').length != 1 && !$('.c-menu-block.main:hover').length != 0 ) {
			    targetWrap.removeClass(shown);
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
				setTimeout(function(){
					var _ = $(this);
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

});