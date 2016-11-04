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
	$('.products-inner .product-card-inner').matchHeight({
		 property: 'height'
	});
	$('.specials-wrapper .specials-item').matchHeight({
		 property: 'min-height'
	});
	$('.sertivicat-wrap .sertivicat-item').matchHeight({
		 property: 'min-height'
	});
} compareHeight();

function Tabs(){
if($('.js-tabs-wrap').length){
	
	var parent = $('.js-tabs-wrap');
		parent.each(function(){
			var _ = $(this),
					trigger = _.find('.js-tab-trigger'),
					tabbody = _.find('.tabs-body'),
					tabcont = tabbody.find('.tabs-cont');


		tabcont.not(":first").hide();
		trigger.on('click',function(){

			var _ = $(this);

			if(!_.hasClass('active')){

				_.addClass('active').siblings().removeClass('active')
				var triggerA = parent.find(trigger).filter('.active');
				tabcont.hide().eq($(triggerA).index()).fadeIn().find('.slick-slider').slick('setPosition');
			}
		}).first().addClass('active');
				//for gmap
				trigger.on('click',function(){
						var _t = $(this);
						if(tabcont.eq(_t.index()).find('#map').length && !_t.hasClass('loaded')){
								_t.addClass('loaded');
								initMap();
						}
				});
				trigger.on('click',function(){
						var _d = $(this),
								themer = _d.parent(),
								contact = _d.parent().parent().parent();
						if(contact.hasClass('contact-section')){
								if(tabcont.eq(_d.index()).find('#map').length && themer.hasClass('t-white')){
										themer.removeClass('t-white');
								}
								else{
										themer.addClass('t-white');
								}
						}

				});
	});

		
	}
} Tabs();

if($('#map').length){
	function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: {lat: 53.955, lng: 27.715360},
			streetViewControl: false,
			panControl: false,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			zoomControlOptions: {
	        position: google.maps.ControlPosition.RIGHT_CENTER
	    },
			styles:[
			{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"lightness": 33
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "labels",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "labels.text",
					"stylers": [
							{
									"gamma": "0.75"
							}
					]
			},
			{
					"featureType": "administrative.neighborhood",
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"lightness": "-37"
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f9f9f9"
							}
					]
			},
			{
					"featureType": "landscape.man_made",
					"elementType": "geometry",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "40"
							},
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "landscape.natural",
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "-37"
							}
					]
			},
			{
					"featureType": "landscape.natural",
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "100"
							},
							{
									"weight": "2"
							}
					]
			},
			{
					"featureType": "landscape.natural",
					"elementType": "labels.icon",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "80"
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "0"
							}
					]
			},
			{
					"featureType": "poi.attraction",
					"elementType": "geometry",
					"stylers": [
							{
									"lightness": "-4"
							},
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#c5dac6"
							},
							{
									"visibility": "on"
							},
							{
									"saturation": "-95"
							},
							{
									"lightness": "62"
							}
					]
			},
			{
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"gamma": "1.00"
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "labels.text",
					"stylers": [
							{
									"gamma": "0.50"
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"gamma": "0.50"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#c5c6c6"
							},
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"lightness": "-13"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "labels.icon",
					"stylers": [
							{
									"lightness": "0"
							},
							{
									"gamma": "1.09"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#e4d7c6"
							},
							{
									"saturation": "-100"
							},
							{
									"lightness": "47"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"lightness": "-12"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#fbfaf7"
							},
							{
									"lightness": "77"
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"lightness": "-5"
							},
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"saturation": "-100"
							},
							{
									"lightness": "-15"
							}
					]
			},
			{
					"featureType": "transit.station.airport",
					"elementType": "geometry",
					"stylers": [
							{
									"lightness": "47"
							},
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"color": "#acbcc9"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"saturation": "53"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"lightness": "-42"
							},
							{
									"saturation": "17"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"lightness": "61"
							}
					]
			}
		]

	});
	var image = {
		url: 'img/marker.svg',
		size: new google.maps.Size(41, 45),
	};
	var beachMarker = new google.maps.Marker({
		position: {lat: 53.959612, lng: 27.715360},
		map: map,
		icon: image
	});

		
} initMap();

}
function Colors(){
	var trigger = $('.js-colors');
	var target = $('.colors-wrapper');

	trigger.on('click', function(){
		target.toggleClass('active');
	});
}Colors();
function initCustomSelectList() {
    var _conf = {
            initClass: 'cs-active',
            f: {}
        },
        _items = $('.js-select-custom');

    $.each(_items, function () {
        var _select = $(this),
            _button = _select.find('button'),
            _list = _select.find('.select-list');

        _select.on('reinit', function() {
            var _active = _list.find('input:checked');

            if(_active.size()) {
                _button.addClass('is-checked').children('span').text(_active.siblings('span').text());
            }
            else {
                _button.removeClass('is-checked').children('span').text(_button.data('placeholder'))
            }
        });

        _button.on('click', function() {
           _button.addClass('active');
            return(false);
        });

        _select.on('click', 'label', function() {
           var _label = $(this),
               _input = _label.find('input');

            _input.prop('checked', true);
            _select.trigger('reinit');
            _button.removeClass('active');
        });
        _select.trigger('reinit');
        _select.addClass(_conf.initClass);

    });

    $(document).off('mouseup.list').on('mouseup.list', function (e){
        var _div = $(".select-check");
        if (!_div.is(e.target)
            && _div.has(e.target).length === 0) {
            _items.find('button').removeClass('active');
        }
    });
}

function filterProducts() {
	var trigger = $('.js-select-trigger');

	trigger.each(function(){
		var _ = $(this),
				button = _.find('.selects'),
				textCont = _.find('.btn-text'),
				container = _.find('.dropdown-target'),
				placeholder = button.data('placeholder'),
				valuename = button.data('valuename'),
				value = button.data('value'),
				submit = _.find('.js-filter-submit'),
				clear = _.find('.js-select-clear');

		_.on('click', '.selects', function(event){
			event.preventDefault();
			_.toggleClass('active').siblings().removeClass('active');

		});

		submit.on('click', function(e){
				var wrapper = $(this).closest('.dropdown-content'),
						input = wrapper.find('input'),
						selCont = wrapper.find('.selected-list'),
						unselCont = wrapper.find('.select-u-body');
						e.preventDefault();
				$(this).closest(trigger).removeClass('active');
				_.trigger('reinit');
				
				setTimeout(function(){
					input.each(function(){
						var _this= $(this),
						parent = _this.closest('.select-u-item');

						if(_this.is(':checked')){
						 	parent.detach().appendTo(selCont);
						}
						else{
							parent.detach().appendTo(unselCont);
						}

						sortArr(selCont);
						sortArr(unselCont);
					});
				},500);

				clear.on('click', function(e){
					e.preventDefault();
					console.log(input.length)
					_.removeClass('active , is-checked').find('input').prop('checked', false); 
					selCont.find('.select-u-item').detach().appendTo(unselCont);
					sortArr(unselCont);
					textCont.text(placeholder)
				})
		});

			//реинит реинит смотри как умею ахуеть да?)
		_.on('reinit', function(){

			var tta = $(this),
					innerCont = tta.find('.dropdown-content'),
					inputs = innerCont.find('input:checked'),
					textmoded = '';
					modText(inputs)
					
					if(inputs.length) {
            tta.addClass('is-checked');
            textCont.text('' + valuename + ': ' + textmoded +' ' + value)
          }
          else {
            tta.removeClass('is-checked');
            textCont.text(placeholder)
          }

				function modText(inp){
					inp.each(function(){
						var text = $(this).parents('.input_label').find('.input-text').text(),
								textMod = text + ', ';
								textmoded += textMod;
					})
				}
		});
			//сортируем массив
			function sortArr(cont){
				var arr = [],
						elems = cont.find('li');

				elems.each(function(index){
					var data = [];
						data[0] = $(this).find('input').data("value");
					  data[1] = $(this).prop("outerHTML");
						arr[index] = data;
				});
				arr.sort();
				setTimeout(function(){
					AppendNewArr(arr,cont)
				},10)
			}
			// выплевываем его
			function AppendNewArr(elem,cont){
				cont.empty();
				for(var i = 0; i < elem.length; i++) {
				  var arrs = elem[i];
				  cont.append(arrs[1])
				}
				$('.selected-list input').prop('checked', true);
			}
	});
		//доделать потом если понадобится
    // $(document).off('mouseup.select-check .dropdown-target').on('mouseup.select-check .dropdown-target', function (e){
    //     var _div = $(".dropdown-target");
    //     if (!_div.is(e.target)
    //         && _div.has(e.target).length === 0) {
    //         trigger.removeClass('active');
    //     }
    // });
} filterProducts();

function mobileFilter(){
	var trigger = $('.mobile-dropdowm-trigger');

	trigger.on('click', function(){
		$(this).toggleClass('active');
	})
}mobileFilter();

if($('.sort_wrapper').length){

 	var sortItem = function(){
 		var trigger = $('.js-select-item');

 		trigger.on('click', function(){
 			var _ = $(this);
 			var textCont = _.find('span');
 			var target = _.parent().find('.dropdown-target');
 			var item = target.find('.sort-select-item a');

 			_.toggleClass('active');

 			item.on('click',function(e){

 				var _ = $(this),
 					altLext = _.data('text');

 				textCont.text(altLext);

 				_.parent().addClass('active').siblings().removeClass('active');
 				e.preventDefault();
 				setTimeout(function(){

 					target.removeClass('active');
 					trigger.removeClass('active');

 				},300);
 			});
 				$(document).mouseup(function (e){ 
					if (!trigger.is(e.target) 
					    && trigger.has(e.target).length === 0 && !item.is(e.target) ) {
						target.removeClass('active');
 						trigger.removeClass('active');
					}
				});

 		});
 	};
 	sortItem();
 } 
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
					curPage = event.type == 'init' || event.type == 'reInit' || event.type == 'breakpoint'? 0 : parseInt(slidesNext/slidesScroll);
					totatSlideCont.text(totalPages)
					curSlideCont.text(curPage + 1)
		});

}
function modals(val){
	var trigger = $(".js-modal-trigger"),
			closer = $('.js-modal-closer'),
			body = $('.out');

		var data = val.data('target');

		body.addClass('modal-opened').find(data).addClass('active');

		$(document).mouseup(function (e){ 
				var div = $('.modal-container');
				if (!div.is(e.target) 
				    && div.has(e.target).length === 0) {
					div.parent().removeClass('active');
					body.removeClass('modal-opened')
					var slider =div.parent().find('.slick-slider');
					setTimeout(function(){
						slider.slick('unslick');
					},300);
					
				}
			});
	closer.click(function(){
			var target = $(this).parents('.modal-layout').removeClass('active');
			var slider =$(this).parent().find('.slick-slider');
			body.removeClass('modal-opened');
			if(slider.length){
				setTimeout(function(){
					slider.slick('unslick');
					slider.children().remove();
				},300);
			}
		});
}