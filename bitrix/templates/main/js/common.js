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
				if(targetWrap.find("[data-elem="+ id +"]").length){
					_.addClass('active').siblings().removeClass('active');
					targetWrap.addClass(shown);
					targetWrap.find("[data-elem="+ id +"]").addClass(current).siblings().removeClass(current);
				}else{
					targetWrap.removeClass(shown);
					items.removeClass('active')
				}
				
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

		subtogle.children('a').on('click',function(e){
			if($(this).parent().find('ul').length){
				e.preventDefault();
				$(this).parent().toggleClass('active').siblings().removeClass('active');
			}
		});
		maintogle.on('click',function(){
			$(this).toggleClass('active');
			subtogle.removeClass('active');
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

function smallarr(){
	var tarcont = $('.page__menu--inner').find('.c-menu-block.main'),
		tarlist = tarcont.find('ul'),
		tarcontH = tarcont.height(),
		tarlistH = tarlist.height(),
		cls = 'arr-h',
		item = $('.page__menu--inner').find('.c-menu-block.add');
	if(tarlistH <= tarcontH){
		item.addClass(cls);
	}
	tarcont.on('scroll',function(){
		item.hasClass(cls) ? false : item.addClass(cls);
	});
}smallarr();
function CheckH(){
	var b = $('body'),
		content = $('.page__wrapper'),
		target = $('.btn.totop');
	if(content.height() <= b.height()){
		target.css('visibility','hidden');
	}else{
		target.removeAttr('style');
	}
	$(window).on('resize',function(){
		if(content.height() <= b.height()){
			target.css('visibility','hidden');
		}else{
			target.removeAttr('style');
		}
	});

}CheckH();

function Accordeon(){
if($('.offerlist-section').length){
	var maintrigger = $('.js-accordion-trigger'),
		body = $('.js-accordion-body'),
		truetrigger = maintrigger.children('.table-item').not('.table-status').not('.table-btn');
		maintrigger.not('.active').find(body).hide();
		truetrigger.on('click',function(event){
			var parent = $(this).parent(),
				target = parent.find(body);
			if(parent.hasClass('active')){
				parent.siblings().removeClass('active').find(body).slideUp(200);
				parent.removeClass('active').find(body).slideUp(300);
			}else{
				parent.siblings().removeClass('active').find(body).slideUp(200);
				parent.addClass('active').find(body).slideDown(300, function(){
						var pos = parent.position().top;
						parent.hasClass('vacancy-head') ? jQuery(".out:not(:animated)").animate({scrollTop: pos }, 500) : jQuery(".out:not(:animated)").animate({scrollTop: pos + 200}, 500)
						
				});
			}
		});
	}
}Accordeon();


if($('.js-colors').length){
function Colors(){
	var trigger = $('.js-colors');
	var target = $('.colors-wrapper');
	var dest = target.offset().top;

	trigger.on('click', function(){
		target.toggleClass('active');
		jQuery(".out:not(:animated)").animate({scrollTop: dest - 60}, 500);
	});
}Colors();
}

function drag() {
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
} drag();

function mobileFilter(){
	var trigger = $('.mobile-dropdowm-trigger');

	trigger.on('click', function(){
		$(this).toggleClass('active');
	})
}mobileFilter();



$(".js-scroll").on('click', function () {
		var elementClick = $(this).data("target")
		var destination = $(elementClick).position().top;
		$(".out").animate({scrollTop: destination + 30}, 420);

		 if (elementClick == '#tabs') {
			$(".tabs-item").first().trigger('click');
		 }
		 else if (elementClick == '#top') {
			$(".out").animate({scrollTop: 0}, 420);
		 }
	});


function modalOff(){
	var trigger =$('.js-white');
	var val = 0;
	$('.sertivicat-wrap').find('.product-add-item').each(function(){
		var t = $(this);
		t.attr('data-slick-index', val);
		val++;
	});
			

	trigger.click(function(e){
		if($(window).width()> 991){
			var _ = $(this);
			var target = _.data('target');
			var ftarget = $('.out').find(target);
			var maincont = ftarget.find('.product-modal-slider');
			var dopcont = ftarget.find('.white-thumbs');
			var arrcont = ftarget.find('.cards-slider-nav');
			var closer = ftarget.find('.js-modal-closer');
			var mainSlides = _.parent().find('.product-slider-item');
			var addSlides = _.parent().find('.product-add-item');
			var currslide = _.find('.slick-active').data('slick-index') || $(e.target).data('slick-index') || $(e.target).closest('.product-add-item').data('slick-index');
			if(mainSlides.length > 1){

				ftarget.addClass('active')

				addSlides.clone().appendTo(dopcont).addClass('slick-slide').attr('role',"option").removeAttr('style').removeAttr('tabindex');
				mainSlides.clone().appendTo(maincont).removeAttr('style').removeAttr('tabindex');
				replaceImg(maincont);
				slidesCount(maincont);
				if(!maincont.hasClass('slick-initialized')){
					maincont.slick({
						arrows: true,
						slidesToShow: 1,
						asNavFor: dopcont,
						infinite: false,
						appendArrows: arrcont,          
						nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 14" style="enable-background:new 0 0 45.9 14;" xml:space="preserve"><style type="text/css">.slider-arr{fill-rule:evenodd;clip-rule:evenodd;fill:#353535;}</style><g><g><polygon class="slider-arr" points="45.9,6.8 38.9,0 37.9,1 42.9,6 0,6 0,7.5 43,7.5 37.6,12.9 38.7,14 45.7,7 "/></g></g></svg></div></button>',
						prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 14" style="enable-background:new 0 0 45.9 14;" xml:space="preserve"><style type="text/css">.slider-arr{fill:#353535;}</style><g><g><polygon class="slider-arr" points="0.2,7 7.2,14 8.3,12.9 2.9,7.5 45.9,7.5 45.9,6 3,6 8,1 7,0 0,6.8     "/></g></g></svg></div></button>',
					});

					dopcont.slick({
						asNavFor: maincont,
						// slidesToShow: 3,
						slidesToScroll: 1,
						infinite: false,
						rows: 6,
						slidesPerRow: 3,
						draggable: false,
						arrows:false,
						focusOnSelect: true,
					});
				}
				function replaceImg(container){
					var mainSlides = container.parent().find('.product-slider-item');
					mainSlides.each(function(){
						var _t = $(this),
							bigsrc = _t.data('big'),
							img = _t.find('img');
						img.attr('src',bigsrc);
					});

				}
				maincont.slick('slickGoTo', currslide).slick('setPosition');
				if(currslide === undefined){
					dopcont.find('.product-add-item').first().addClass('curr');
				}else{
					dopcont.find('[data-slick-index = '+ currslide +']').addClass('curr');
				}
				

				maincont.on('init reinit beforeChange',function(event, slick, currentSlide, nextSlide){
					var slidesNext = parseInt(nextSlide);
					leftblocks.removeClass('curr');
					dopcont.find('[data-slick-index = '+ slidesNext +']').addClass('curr');
				});
				var ing = dopcont.find('.product-add-img');
				var leftblocks = dopcont.find('.product-add-item');
					leftblocks.each(function(){
						var t = $(this);
							index = t.data('slick-index');
						t.on('click', function(){
							leftblocks.removeClass('curr');
							t.addClass('curr')
							
						});
					});

					if(ing.length == 0){
						dopcont.find('img').wrap("<div class='product-add-img'></div>" );
					}
				closer.on('click', function(){
					if(maincont.hasOwnProperty('slick')) _slider.slick = false;
					if(dopcont.hasOwnProperty('slick')) _preview.slick = false;
					ftarget.removeClass('active').find('.slick-slider').slick('unslick');
					$(maincont).add(dopcont).removeClass('slick-initialized slick-slider')
					maincont.empty();
					dopcont.empty();
				});

			}
		}else{
			return false
		}
	});

}modalOff();
function ProductSlider() {
	var _slider = document.getElementById('js-constructor-slider'),
		_preview = document.getElementById('js-constructor-preview_slider');

	if(_slider.hasOwnProperty('slick')) _slider.slick = false;
	if(_preview.hasOwnProperty('slick')) _preview.slick = false;

	$(_slider).add(_preview).removeClass('slick-initialized slick-slider')
	$('.product-nav').find('button').remove();

	setTimeout(function () {

		$('.product-much-slider').slick({
			arrows: true,
			slidesToShow: 1,
			asNavFor: $('.product-add-slider'),
			infinite: false,
			focusOnSelect: true,
			appendArrows: $('.product-nav'),
			nextArrow: '<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 14" style="enable-background:new 0 0 45.9 14;" xml:space="preserve"><style type="text/css">.slider-arr{fill-rule:evenodd;clip-rule:evenodd;fill:#353535;}</style><g><g><polygon class="slider-arr" points="45.9,6.8 38.9,0 37.9,1 42.9,6 0,6 0,7.5 43,7.5 37.6,12.9 38.7,14 45.7,7 "/></g></g></svg></div></button>',
			prevArrow: '<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 14" style="enable-background:new 0 0 45.9 14;" xml:space="preserve"><style type="text/css">.slider-arr{fill:#353535;}</style><g><g><polygon class="slider-arr" points="0.2,7 7.2,14 8.3,12.9 2.9,7.5 45.9,7.5 45.9,6 3,6 8,1 7,0 0,6.8     "/></g></g></svg></div></button>',
			responsive: [
				{
					breakpoint: 800,
					settings: {
						dots: true,
					}
				}
			]
		});
		$('.product-add-slider').slick({
			asNavFor: $('.product-much-slider'),
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			draggable: false,
			arrows: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1150,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				}
			]
		});
	}, 10);
}

function subscribe(){
	if($('.js-subscribe-container').length){
		var parent = $('.js-subscribe-container'),
			trigger = parent.find('.select-u-item'),
			target = parent.find('.input-wrapper'),
			targetType = target.data('type');

		trigger.each(function(){
			var _ = $(this);
			_.on('click', function(){
				parent.trigger('reinit');
			})
		})
		parent.on('reinit', function(){
			target.hide();
			var checked = trigger.find('input:checked');
				checked.each(function(){
					var _ = $(this),
						type = _.val();
					parent.find('[data-type='+ type +']').show();
				})
		});
		parent.trigger('reinit');
	}
}subscribe();

$(window).resize(function(){
	modalOff();
});

validateForms();
sortItem();
filterProducts();
pricerange();
initMap();
initCustomSelectList();
jshover();
compareHeight();
Tabs();
// number();
DropzoneDile();
//end of document ready
});
//end of document ready
function number() {
    var _numbers = {
        containers: {
            main: $('.js-number')
        }
    };

    _numbers.init = function () {
        $.each(_numbers.containers.main, function () {
            _numbers.setAction($(this));
        })
    };

    _numbers.setAction = function (_c) {
        var _input = _c.find('.js-price-input'),
            _b = _c.find('button'),
            _m = _c.find('.fake-bg-currency'),
            _t = _c.find('.fake-bg-text');

        _m.html(_c.data('type'));
        _t.html(_input.val());

       // _input.val(_c.data('step'));

        _input.off('change.numbers').on('change.numbers', function () {
            var new_val = _numbers.format(_input.val(), _c.data('step'), _c.data('max-number'));
            _input.val(new_val);
            _t.text(new_val);
        });

        _input.off('keypress.numbers').on('keypress.numbers', function () {
            var val = $(this).val();
            _t.text(val);
        });

        _b.off('click.numbers').on('click.numbers', function () {
            var cur_val = +_input.val(),
                step = +_c.data('step'),
                more_val = parseFloat(cur_val + step).toFixed(1),
                less_val = parseFloat(cur_val - step).toFixed(1);

            more_val = _numbers.format(more_val, _c.data('step'), _c.data('max-number'),_c.data('min-number'));
            less_val = _numbers.format(less_val, _c.data('step'), _c.data('max-number'),_c.data('min-number'));

            if ($(this).hasClass('number__plus')) {
                _input.val(more_val).trigger('change');
            }
            else {
                _input.val(less_val).trigger('change');
            }
        });

        //_input.trigger('change');

    };

    _numbers.format = function (val, step, max,min) {
        var format_val = val.replace(/.*?(([0-9]*\.)?[0-9]+).*/g, '$1');
        // max = 999999;
        step = +step;
        // console.log(format_val,max,min,step)
        if(step === 0) step = 1;

        format_val = +format_val;
        step = +step;
        max = +max;
		// console.log(format_val,max,min,step)
        if (format_val > step) {
            var left_over = ((format_val * 1000) % (step * 1000)) / 1000;
            format_val = format_val - left_over;
        }
        else {
            format_val = step;
        }

        if (max && format_val > max) {
            format_val = max;
        }
        if (min && format_val < min) {
            format_val = min;
        }
        format_val = isNaN(format_val) ? 0 : format_val;

        return step < 1 ? format_val.toFixed(1) : format_val.toFixed(0);

    };

    _numbers.init();

};
$(number);
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

function modals(val) {

    var trigger = $(".js-modal-trigger"),
        closer = $('.js-modal-closer'),
        body = $('body');
    var data = val.data('target');
    body.addClass('modal-opened').find(data).addClass('active').siblings().removeClass('active').find('.slick-slider').trigger('resize');
    $.fn.matchHeight._update();
    compareHeight();
    $(document).off('mousedown').mousedown(function (e) {
        var div = $('.modal-container');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('active');
            body.removeClass('modal-opened')
            var slider = div.parent().find('.slick-slider');
            setTimeout(function () {
                slider.slick('unslick');
            }, 300);

        }
    });

    closer.off('click').on('click', function () {
        var target = $(this).parents('.modal-layout').removeClass('active');
        var slider = $(this).parent().find('.slick-slider');
        body.removeClass('modal-opened');
        if (slider.length) {
            setTimeout(function () {
                slider.slick('unslick');
                slider.children().remove();
            }, 300);
        }
    });

    // function ModalReinit(){
    // 	var modal = body.find('.modal-opened'),
    // 		closer = modal.find('.js-modal-closer');
    // };
    return false
}
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
						if ((target+':hover').length != 0 && (togle+':hover').length != 1 ) {
						target.add(togle).removeClass('active');
						timeout = timeout;
				}
			},251);
		});
}
function Tabs(){
	if($('.js-tabs-wrap').length){
		
		var parent = $('.js-tabs-wrap');
			parent.each(function(){
				var _ = $(this),
					trigger = _.find('.js-tab-trigger'),
					tabbody = _.find('.tabs-body'),
					tabcont = tabbody.find('.tabs-cont'),
					triggerCur = _.find(trigger).filter('.active'),
					triggerIndex = triggerCur.index();

			if(!triggerCur.length){
				tabcont.not(':first').hide();
				trigger.first().addClass('active');
			}else{
				tabcont.hide().eq(triggerIndex).show();
			}

			

			trigger.on('click',function(e){
				var _ = $(this);
				e.preventDefault();
				if(!_.hasClass('active')){
					_.addClass('active').siblings().removeClass('active')
					var triggerA = parent.find(trigger).filter('.active');
					tabcont.hide().eq($(triggerA).index()).fadeIn().find('.slick-slider').slick('setPosition');
				}
			});
				//for gmap
			trigger.on('click',function(){
					var _t = $(this);
					if(tabcont.eq(_t.index()).find('#map').length && !_t.hasClass('loaded')){
							_t.addClass('loaded');
							initMap();
							 // google.maps.event.trigger(map, 'resize');
					}
			});
			trigger.on('click',function(){
					var _d = $(this),
							themer = _d.parent(),
							contact = _d.parent().parent().parent();
					if(contact.hasClass('contact-section')){
							if(tabcont.eq(_d.index()).find('#map_custom').length && themer.hasClass('t-white')){
									themer.removeClass('t-white');
							}
							else{
									themer.addClass('t-white');
							}
					}
			});
		});
	}
}

function initMap() {
	var trel = $('#map');
	var map;
	if(trel.length){
		var element = document.getElementById('map');
		var latcord = parseFloat(element.getAttribute('data-lat'));
		var loncord = parseFloat(element.getAttribute('data-lon'));
		var imgpath = element.getAttribute('data-icon');
		var centercords = {lat: latcord, lng: loncord};
		map = new google.maps.Map(element, {
			zoom: 13,
			center: centercords,
			fullscreenControl: true,
			scrollwheel: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			gestureHandling: "greedy",
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
		var img = {
			url: imgpath,
			// This marker is 20 pixels wide by 32 pixels high.
			size: new google.maps.Size(82, 90),
			scaledSize: new google.maps.Size(41, 45), 
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0, 45)
		};
		var mainmarkermarker = new google.maps.Marker({
			position: centercords,
			map: map,
			icon: img,
			zIndex: 99999
		});

		
		if(trel.hasClass('map-elem-near')){
			var markers = [];
			onMarkerLoad(elems.points);
			map.set('zoom', 12);
			var triggers = $(trel).closest('.contact-section').find('.js-map-trigger');
			var marker;
			var panPath = [];   // путь
			var panQueue = [];  // очередь
			var STEPS = 10;     // шаг
			var last;
			triggers.each(function(){
				var _ = $(this),
					ind = _.index();
				_.on('click',function(){
					console.log()
					_.addClass('active').siblings().removeClass('active');
					var lat = markers[ind].position.lat(),
						lng = markers[ind].position.lng();
					panTo(lat,lng);
				});
			});
			function onMarkerLoad (json) {
				var markerarr = [];
				mainmarkermarker.setMap(null)
				mainmarkermarker.setMap(null)

				for(var i = 0; i < json.length; i++) {
					// Current object
					var obj = json[i];
					var imgType = {
						url: obj.type,
						// This marker is 20 pixels wide by 32 pixels high.
						size: new google.maps.Size(82, 90),
						scaledSize: new google.maps.Size(41, 45), 
						origin: new google.maps.Point(0,0),
						anchor: new google.maps.Point(0, 45)
					};
					// Adding a new marker for the object
					var pos = new google.maps.LatLng(obj.lat,obj.lng);
					markerarr.push(pos)					
					var marker = new MarkerWithLabel({
						position: new google.maps.LatLng(obj.lat,obj.lng),
						title: obj.title,
						map: map,
						icon: imgType,
						id: obj.id,
						mob1: obj.mob1,
						mob2: obj.mob2,
						gor1: obj.gor1,
						gor2: obj.gor2,
						zIndex: 999999,
						labelContent: '<div id="content"><div class="siteNotice"><div class="u-text lt">' +obj.name+ '</div><div class="u-text lt">' +obj.title+ '</div></div><div class="maindesc"><div class="contact-block"><div class="u-graytext">Моб. телефоны</div><a href="tel:'+obj.mob1+'"class="maindesc-elem tel">' +obj.mob1+ '</a><a href="tel:'+obj.mob2+'"class="maindesc-elem tel">' +obj.mob2+'</a></div><div class="contact-block"><div class="u-graytext">Гор. телефоны</div><a href="tel:'+obj.gor1+'"class="maindesc-elem tel">' +obj.gor1+'</a><a href="tel:'+obj.gor2+'"class="maindesc-elem tel">' +obj.gor2+'</a></div></div></div>',
						labelAnchor: new google.maps.Point(0, 0),
						labelClass: "labels",
					});
					markers.push(marker);

					google.maps.event.addListener(marker, "click", function(e) {
							hidemarkers(markers)
							this.set("labelClass", "labels place_open")	
				
					});

				} // end loop

				google.maps.event.addListener(map, "click", function(e) {
					if (!$(e.target).hasClass('labels')){
							hidemarkers(markers)
					}
				});
			}
			function hidemarkers(array){
				for(var i = 0; i< array.length;i++){
					var cur  = array[i];
						cur.set("labelClass", "labels")	
				}
			}
			function panTo(newLat, newLng) {
			  if (panPath.length > 0) {
				panQueue.push([newLat, newLng]);
			  } else {
				// Lets compute the points we'll use
				panPath.push("LAZY SYNCRONIZED LOCK");
				var curLat = map.getCenter().lat();
				var curLng = map.getCenter().lng();
				var dLat = (newLat - curLat)/STEPS;
				var dLng = (newLng - curLng)/STEPS;

				for (var i=0; i < STEPS; i++) {
				  panPath.push([curLat + dLat * i, curLng + dLng * i]);
				}
				panPath.push([newLat, newLng]);
				panPath.shift();
				setTimeout(doPan, 10);
			  }
			}

			function doPan() {
			  var next = panPath.shift();
			  if (next != null) {
				map.panTo( new google.maps.LatLng(next[0], next[1]));
				setTimeout(doPan, 10 );
			  } else {
				var queued = panQueue.shift();
				if (queued != null) {
				  panTo(queued[0], queued[1]);
				}
			  }
			}
		}
	}
}
function initCustomSelectList() {
		var _conf = {
						initClass: 'cs-active',
						f: {}
				},
				_items = $('.js-select-custom').not('.' + _conf.initClass);

		$.each(_items, function () {
			var _select = $(this),
					_button = _select.find('button'),
					placeholder = _button.data('placeholder'),
					valuename = _button.data('valuename'),
					_list = _select.find('.select-list');
					if(_select.hasClass('form-calculator-color')){
						var colorPlace =_button.find('.btn-color');
					}

			_select.on('reinit', function() {
				var _active = _list.find('input:checked');
				CheckForSelect($(this).parents('form'));
					if(_active.length) {
						_select.parent().hasClass('input-wrapper') ?_button.children('.btn-text').text('' + valuename  + _active.siblings('span').text()+ '').parent().addClass('is-checked') : _button.children('.btn-text').text('' + valuename + ': ' + _active.siblings('span').text()+ '').parent().addClass('is-checked');
						if(_select.hasClass('form-calculator-color')){
							var clr =_active.parent().find('.color-block').css('background-color');
							colorPlace.css('background-color',clr)
						}
						if(_select.hasClass('form-calculator-cards')){
							_button.children('.btn-text').text('' + valuename + ': ' + _active.siblings().find('.categories-elem-name').text()+ '').parent().addClass('is-checked');
						}
					
					}
					else {
							_button.children('.btn-text').text(_button.data('placeholder')).parent().removeClass('is-checked');
					}
				});

				_button.on('click', function() {
					_button.parent().toggleClass('active').siblings().removeClass('active');
					return(false);
				});

				_select.on('click', 'label', function() {
					 var _label = $(this),
						 _input = _label.find('input');

						_input.prop('checked', true).trigger('change');
						_select.trigger('reinit');
						_button.parent().removeClass('active');
				});
				_select.trigger('reinit');
				_select.addClass(_conf.initClass);

			$(document).on('mouseup', function (e){
				if (!_select.is(e.target)
					&& _select.has(e.target).length === 0) {
					_select.removeClass('active');
				}
		});
	});
} 
function validateForms(){
	var form_form = $('.js-validate');
	if (form_form.length) {
		form_form.each(function () {
			var form_this = $(this);
			$.validate({
				validateHiddenInputs: true,
				ignore: false,
				form : form_this,
				borderColorOnError : true,
				scrollToTopOnError : false,
				onValidate : function($form) {
					CheckForSelect($form);
					}
			});
		});
	};
}
function CheckForSelect(form){
	if(form.find('.select-check').length){
		var wrap = form.find('.select-check');
		wrap.each(function(){
			var _ = $(this),
				btn = _.find('.selects'),
				option = _.find('.option.has-error');
			if(option.length){
				_.addClass('error');
				
			}else{
				_.removeClass('error');
			}
		});
		wrap.hasClass('error') ? false : true
	}
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
				price = _.find('.price'),
				selCont = _.find('.selected-list'),
				unselCont = _.find('.select-u-body'),
				clear = _.find('.js-select-clear');

		_.on('click', '.selects', function(event){
			event.preventDefault();
			_.toggleClass('active').siblings().removeClass('active');

		});
		price.keypress(function(event){
			var key, keyChar;
			if(!event) var event = window.event;
			if (event.keyCode) key = event.keyCode;
			else if(event.which) key = event.which;
			if(key==null || key==0 || key==8  || key==9 || key==46 || key==37 || key==39 ) return true;
			keyChar=String.fromCharCode(key);
			if(!/\d/.test(keyChar))	return false;

		});
		price.on("paste", function(event){
			event.preventDefault();
		});
		price.on('keyup', function (e) {
			if (e.keyCode == 13) {
				submit.trigger('click');
			}
		});
		submit.on('click', function(e){
			var wrapper = $(this).closest('.dropdown-content'),
					input = wrapper.find('input');
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
		});
		clear.on('click', function(e){
			e.preventDefault();
			_.removeClass('active , is-checked').find('input').prop('checked', false).removeAttr('checked'); 
			selCont.find('.select-u-item').detach().appendTo(unselCont);
			sortArr(unselCont);
			textCont.text(placeholder);
			price.val('');
		});
			//реинит реинит смотри как умею ахуеть да?)
		_.on('reinit', function(){

			var tta = $(this),
				innerCont = tta.find('.dropdown-content'),
				inputs = innerCont.find('input:checked'),
				price = tta.find('.price'),
				priceMin = tta.find(".price-min").val(),
				priceMax = tta.find(".price-max").val(),
				textmoded = '';
				modText(inputs)
				if(inputs.length && !price.length) {
							tta.addClass('is-checked');
							textCont.text('' + valuename + ': ' + textmoded +' ' + value)
				}else if(!inputs.length && price.length){
						console.log(priceMin.length,priceMax.length)
						if(priceMin.length >= 1 && priceMax.length <= 1){
							tta.addClass('is-checked');
							textCont.text('' + valuename + ': '+'от ' + priceMin + ' ' + value)
						console.log(1)
						}
						if(priceMax.length >= 1 && priceMin.length <= 1){
							tta.addClass('is-checked');
							textCont.text('' + valuename + ': '+'до ' + priceMax + ' ' + value)
						console.log(2)
						}
						if(priceMax.length >= 1 && priceMin.length >= 1){
							tta.addClass('is-checked');
							textCont.text('' + valuename + ': ' + priceMin + '-'+ priceMax +' ' + value)
						console.log(3)
						}
				}
				else {
						tta.removeClass('is-checked');
						textCont.text(placeholder);
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

		$(document).on('mouseup', function (e){
				if (!trigger.is(e.target)
						&& trigger.has(e.target).length === 0) {
						trigger.removeClass('active');
				}
		});
}

function OnLoadFilterInit (){
	var productFilterTriggers = $('.js-select-trigger');
	setTimeout(function(){
		productFilterTriggers.each(function(){
			var _ = $(this);
			_.trigger('reinit');
		});		
	},100)
}
//выпаддающие списки
var sortItem = function(){
	if($('.sort_wrapper').length){
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

		$(document).on('mouseup', function (e){
			if (!trigger.is(e.target)
				&& trigger.has(e.target).length === 0) {
				trigger.removeClass('active');
			}
		});

		});
	}
}


function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
		return String.fromCharCode(event.keyCode) // IE
	}
	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
		return String.fromCharCode(event.which) 
	}
	return null;
}
function pricerange(){
	var amount = $('#amount');
	var price = parseFloat($('#total-price').data('price'));
	var defaultPrice =  parseFloat(price / 1000 * 300);
	var textcont = $('.prepay-wrap').find('.error-text');
	var errTextMin = textcont.data('text-error-min');
	var errTextMax = textcont.data('text-error-max');
	var target = amount.parent().find('.fake-bg-text');
		$( "#rangeinput" ).slider({
			range: "min",
			value: 300,
			step: 10,
			min: 0,
			max: 1000,
			create: function( event, ui ) {
				$(this).slider( "option", "value", 300  );
				amount.val( (price / 1000 * 300).toFixed(2));
				target.text((price / 1000 * 300).toFixed(2));
				$(this).find('.ui-slider-handle').attr('data-persent',30  + '%');
			},
			slide: function( event, ui ) {
			amount.val( (price / 1000 * ui.value).toFixed(2));
			target.text((price / 1000 * ui.value).toFixed(2));
			handle.attr('data-persent', ui.value / 10  + '%' );
			 if (ui.value < 300) {
					amount.val((price / 1000 * 300).toFixed(2));
					target.text((price / 1000 * 300).toFixed(2));
					handle.attr('data-persent', 30 + '%' );
							// return false
					} else if(ui.value > 300){
					amount.parent().parent().removeClass('error');
						return true
					}
			},
			change: function( event, ui ) {
				if (ui.value < 300) {
					$("#rangeinput").slider('option','value',300)
					return false
				}else if(ui.value > 300){
						return true
						amount.parent().removeClass('error');
					}
					
			}
		});
	var handle = $( "#rangeinput" ).find('.ui-slider-handle');

	amount.on('input',function(e){
		var _ = $(this),
			value = parseFloat(_.val()),
			range = parseInt(((100 * value / price)) * 10),
			min = $( "#rangeinput" ).slider( "option", "min" ),
			max = $( "#rangeinput" ).slider( "option", "max" );

		if(value < defaultPrice || !value){
			amount.parent().parent().addClass('error');
			textcont.text(errTextMin)
			if(!value){
				target.text('');
				
			}else{
				target.text(value)
			}
			return false;
		}
		if(value > parseFloat(price).toFixed(2)){
			amount.parent().parent().addClass('error');
			textcont.text(errTextMax)
			target.text(value);
			return false
		}
		target.text(value);
		amount.parent().parent().removeClass('error').find(textcont).empty();
		compareRange(range, value)
	});

	amount.keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;
	});
		function compareRange(range, value){
		$("#rangeinput").slider("value", range);
		handle.attr('data-persent', range/10 + '%');
		
	}

}
function DropzoneDile(){
	$(".dz-vacancy-file").dropzone({ 
		url: "/file/post",
		previewTemplate: '<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-filename"><span data-dz-name></span></div></div><div class="dz-success-mark"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9.5 13" style="enable-background:new 0 0 9.5 13;" xml:space="preserve"><style type="text/css">.stvac{fill-rule:evenodd;clip-rule:evenodd;fill:#0079FF;}</style><g><g><path class="stvac" d="M7.3,8h5C2.1,8,2,8.1,2,8.2v0.5C2,8.9,2.1,9,2.3,9h5c0.1,0,0.2-0.1,0.2-0.2V8.2C7.5,8.1,7.4,8,7.3,8z M7.3,6 h-2C5.1,6,5,6.1,5,6.2v0.5C5,6.9,5.1,7,5.3,7h2c0.1,0,0.2-0.1,0.2-0.3V6.2C7.5,6.1,7.4,6,7.3,6z M7.3,9.5h-5C2.1,9.5,2,9.6,2,9.7 v0.5c0,0.1,0.1,0.2,0.3,0.2h5c0.1,0,0.2-0.1,0.2-0.2V9.7C7.5,9.6,7.4,9.5,7.3,9.5z M6.9,0H6.3l0,0c0,0,0,0,0,0H0.4 C0.2,0,0,0.2,0,0.4v12.2C0,12.8,0.2,13,0.4,13h8.8c0.2,0,0.4-0.2,0.4-0.4v-10L6.9,0z M8.5,11.7c0,0.2-0.1,0.3-0.3,0.3H1.3 C1.1,12,1,11.8,1,11.7V1.3C1,1.1,1.1,1,1.3,1H6v2c0,0.3,0.2,0.5,0.5,0.5h2V11.7z M5,4.7v0.5c0,0.1,0.1,0.3,0.2,0.3h2 c0.1,0,0.2-0.1,0.2-0.3V4.7c0-0.1-0.1-0.3-0.2-0.3h-2C5.1,4.5,5,4.6,5,4.7z M4,4.5H2V7h2V4.5z"/></g></g></svg></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
		dictDefaultMessage: 'Прикрепить резюме',
		dictFileTooBig : 'Файл слишком большой',
		dictResponseError : 'Сервер ответил с ошибкой',
		dictInvalidFileType: 'Неверный тип файла',
		maxFilesize: '1',
		acceptedFiles: ".doc,.docx,.pdf,.txt",
		autoDiscover:false,
		addRemoveLinks :true
	});
}
//sompare items height, works bad
function compareHeight(){
	setTimeout(function(){
		$('.categories-elem-outer .categories-elem')
		.add('.slider-section-inner .product-card-inner')
		.add('.products-inner .product-card-inner')
		.add('.slider-card-inner .product-card-inner')
		.add('.specials-wrapper .specials-item')
		.add('.sertivicat-wrap .sertivicat-item')
		.add('.pagenews-container .news-block-outer.small .news-block-content-inner').matchHeight({
			 property: 'min-height'
		});
	},100)

	// $('.slider-section-inner .product-card-inner').matchHeight({
	// 	 property: 'min-height'
	// });
	// $('.products-inner .product-card-inner').matchHeight({
	// 	 property: 'min-height'
	// });
	// $('.specials-wrapper .specials-item').matchHeight({
	// 	 property: 'min-height'
	// });
	// $('.sertivicat-wrap .sertivicat-item').matchHeight({
	// 	 property: 'min-height'
	// });
	// $('.pagenews-container .news-block-outer.small .news-block-content-inner').matchHeight({
	// 	 property: 'min-height'
	// });
}

//инит фильрров товаров 1-2 1-4
$(window).on('load',function(){
	setTimeout(OnLoadFilterInit, 501);
});