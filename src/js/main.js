
$(function(){

	var $body = $('body');
	var isMobile = (window.innerWidth < 768);


	// Menu controller
	var Menu = (function(){

		// Elements
		//-----------
		var $header = $('header');
		var $menuTrigger = $header.find('.menu-btn');
		var $hamburgerIcon = $menuTrigger.find('.icon-menu');

		var $nav = $header.find('nav');
		var $subMenus = $nav.find('.nav-box');
		var $subTriggers = $subMenus.find('.nav-title');

		// State variables
		//-------------------
		var isOpen = false;
		var subMenuOpen = false;

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
		function toggleSubMenu() {
			var $this = $(this);
			var alreadyOpen = $this.hasClass('focus');

			// Check if need to open or close
			if (alreadyOpen) {
				subMenuOpen = false;
				closeSubMenu(true);
			} else {
				subMenuOpen = true;

				// - Allow overflow...
				$nav.addClass('box-in-focus');

				// - If another box is open, close it...
				closeSubMenu(false);

				// - Show box
				$this.addClass('focus');
			}

		}
		function closeSubMenu(hideOverflow) {
			var $openBox = $subMenus.filter('.focus');
			console.log('$openBox in closeSubMen():');
			console.log($openBox);

			if ($openBox.length) {
				$openBox.addClass('hide-focus');

				window.setTimeout(function(){
					$openBox.removeClass('hide-focus focus');

					if (hideOverflow) {
						$nav.removeClass('box-in-focus');
					}
				}, 1500);
			}
		}

		function bindEvents() {

			// Toggle the menu ------
			//-----------------------
			$menuTrigger.click(function(){

				isOpen = !isOpen;
				var timeoutVal;

				// If closing, and submenu is open...
				if (!isMobile && !isOpen && subMenuOpen) {
					closeSubMenu(true); // takes about 1.5sec

					timeoutVal = 1400;
				} else {
					timeoutVal = 0;
				}

				// Wait for submenu to close, if needed...
				window.setTimeout(function(){
					// Prevent scroll of regular page
					$body.toggleClass('fixed', isOpen);

					// Trigger menu to open
					animateMenu();
					// $header.toggleClass('open', isOpen);

					animateHamburger();
				}, timeoutVal);

			});


			// Open sub-menus, only on desktop ------
			//------------------------
			if (!isMobile) {
				$subMenus.click(toggleSubMenu);
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