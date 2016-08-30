
$(function(){

	var $body = $('body');
	var isMobile = (window.innerWidth < 768);


	// Menu controller
	var Menu = (function(){

		// Elements
		//-----------
		var $header = $('header');
		var $menuTrigger = $header.find('.menu-btn');
		var $subMenus = $('.nav-box');
		var $subTriggers = $subMenus.find('.nav-title');
		var $hamburgerIcon = $menuTrigger.find('.icon-menu');

		// State variables
		//-------------------
		var isOpen = false;

		function animateHamburger() {
			var stepDelay = 500;

			if (isOpen) {
				$menuTrigger.addClass('close-collapse');
				window.setTimeout(function(){
					$menuTrigger.addClass('close-turn');

					window.setTimeout(function(){
						$menuTrigger.addClass('close-x');
					}, stepDelay-200);
				}, stepDelay);

			// else, just go in reverse
			} else {
				$menuTrigger.removeClass('close-x');
				window.setTimeout(function(){
					$menuTrigger.removeClass('close-turn');

					window.setTimeout(function(){
						$menuTrigger.removeClass('close-collapse');
					}, stepDelay);
				}, stepDelay-200);
			}
		}

		function animateMenu() {
			if (isOpen) {
				$header.toggleClass('open');
			} else {
				$header.addClass('close-start');

				window.setTimeout(function(){
					$header.removeClass('open close-start');
				}, 1300)
			}
		}

		function bindEvents() {

			// Open the menu ------
			$menuTrigger.click(function(){

				isOpen = !isOpen;

				// Prevent scroll of regular page
				$body.toggleClass('fixed', isOpen);

				// Trigger menu to open
				animateMenu();
				// $header.toggleClass('open', isOpen);

				animateHamburger();
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


		function init() {
			bindEvents();
		}

		return {
			init: init
		}
	})();

	Menu.init();
});