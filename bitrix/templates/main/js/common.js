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

if ($('#map').length) {

var map; 
var infoWindow = new google.maps.InfoWindow();

function initialize(){
    initAgentMap(53.903620,27.561963)
    var marker = plotAgent(53.903620, 27.561963);
    marker.setMap(map); }

function initAgentMap(lat, lng) {
    lat = isNaN(lat) || lat === null ? 53.903620: lat;
    lng = isNaN(lng) || lat === null ? 27.561963 : lng;
    map = new google.maps.Map(document.getElementById("map"), {  
        center : new google.maps.LatLng(lat, lng),
        zoom: 15,
        streetViewControl: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions : {
            style : google.maps.ZoomControlStyle.SMALL
        },
        styles:[{
                "stylers": [
                  { "hue": "#0019ff" },
						      { "saturation": -100 },
						      { "invert_lightness": true },
						      { "lightness": 17 },
						      { "weight": 3.6 }
													]
							}]
    });
}
// [
//     {
//         "featureType": "administrative",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "lightness": 33
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "gamma": "0.75"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "lightness": "-37"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#f9f9f9"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.man_made",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "40"
//             },
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.natural",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "-37"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.natural",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "100"
//             },
//             {
//                 "weight": "2"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.natural",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "80"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "0"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "lightness": "-4"
//             },
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#c5dac6"
//             },
//             {
//                 "visibility": "on"
//             },
//             {
//                 "saturation": "-95"
//             },
//             {
//                 "lightness": "62"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "gamma": "1.00"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "gamma": "0.50"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "gamma": "0.50"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#c5c6c6"
//             },
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "lightness": "-13"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "lightness": "0"
//             },
//             {
//                 "gamma": "1.09"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#e4d7c6"
//             },
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "47"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "lightness": "-12"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#fbfaf7"
//             },
//             {
//                 "lightness": "77"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "lightness": "-5"
//             },
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "saturation": "-100"
//             },
//             {
//                 "lightness": "-15"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.airport",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "lightness": "47"
//             },
//             {
//                 "saturation": "-100"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#acbcc9"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "saturation": "53"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "lightness": "-42"
//             },
//             {
//                 "saturation": "17"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "lightness": "61"
//             }
//         ]
//     }
// ]
function plotAgent(lat, long, text, id) {
    var point = new google.maps.LatLng(lat, long);
     var image = {
		    url: 'img/marker.svg',
		    size: new google.maps.Size(38, 38),
		  };
    var marker = new google.maps.Marker({
        position : point,
         url: 'img/marker.svg', 
         icon: image      
    });
    return marker;
}

google.maps.event.addDomListener(window, 'load', initialize);
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