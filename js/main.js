$(function(){
	var $menu = $('.menu');
	var menuClick = false;
	
	$menu.attr('data-state', 'hidden');
	
	$('.menu-link').on('click', function(){
		if (menuClick === false) {
			menuClick = true;
			$menu.attr('data-state', 'active');
		} else {
			menuClick = false;
			$menu.attr('data-state', 'hidden');
		}
	});
});