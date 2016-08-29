
$(function(){

	var $body = $('body');
	var isMobile = (window.innerWidth < 768);


	// Menu controller
	var Menu = (function(){

		var $header = $('header');
		var $menuTrigger = $header.find('.menu-btn');
		var $subMenus = $('.nav-box');
		var $subTriggers = $subMenus.find('.nav-title');

		function init() {
			// Events
			//---------

			// Open the menu ------
			$menuTrigger.click(function(){
				// Prevent scroll of regular page
				$body.toggleClass('fixed');

				// Trigger menu to open
				$header.toggleClass('open');
			});

			// Open sub-menus on desktop ------
			if (!isMobile) {

				$subMenus.click(function(){
					// remove 'focus' class from other boxes
					// add 'focus' class to this box
					var $parentBox = $(this).closest('.nav-box');
					$parentBox.toggleClass('focus').siblings().removeClass('focus');
				});
			}
		}

		return {
			init: init
		}
	})();

	Menu.init();
});