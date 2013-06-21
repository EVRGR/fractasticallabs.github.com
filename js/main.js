(function($) {

	var App = {

		/**
		 * Init Function
		 */
		init: function() {
			$("html").removeClass("no-js");
			App.mainSlider();
			App.scrollAnimations();
			App.popUp();
		},

		mainSlider: function() {
			$('#main-slider').bxSlider({
				mode: 'fade'
			});
		},

		/**
		 * Animations when scrolling - using waypoints plugin (http://imakewebthings.com/jquery-waypoints)
		 */
		scrollAnimations: function() {
			$('#main-slider').waypoint(function(){
				$(this).addClass('inview');
			}, {
				triggerOnce: true,
				offset: function(){
					return $(window).height() - $(this).outerHeight() - 100;
				}
			});
		},

		popUp: function() {
			$(document).ready(function() {
				$(".various").fancybox({
					maxWidth	: 1280,
					maxHeight	: 800,
					fitToView	: true,
					width		: '80%',
					height		: '80%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					padding		: 0
				});
			});
		}
	}
	
	$(function() {
		App.init();
	});

})(jQuery);
