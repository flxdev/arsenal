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
		console.log($('.menu-dropdown-wrapper:hover').length)
		setTimeout(function(){
					if ($('.menu-dropdown-wrapper:hover').length != 1 && !$('.c-menu-block.main:hover').length != 0 ) {
			    targetWrap.removeClass(shown);
			}
		},1)

		
	})
	
};
DesktopMenu()

});