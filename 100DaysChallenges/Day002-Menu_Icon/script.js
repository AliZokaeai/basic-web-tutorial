$('.menu-icon').bind('click', function() {
	$(this).toggleClass('clicked');
	$(this).find('div').removeClass('no-animation');
});