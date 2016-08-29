
$(function(){

	var $body = $('body');

	// Menu controller
	var Menu = (function(){

		var $header = $('header');
		var $menuTrigger = $header.find('.menu-btn');

		function init() {
			// Events
			//---------
			$menuTrigger.click(function(){
				// Trigger menu to open
				// Prevent scroll of regular page
				$header.toggleClass('open');
				$body.toggleClass('fixed');
			});
		}

		return {
			init: init
		}
	})();

	Menu.init();
});