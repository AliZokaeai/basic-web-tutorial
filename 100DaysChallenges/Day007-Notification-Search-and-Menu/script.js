$('.search-icon').bind('click', function(){
    $('.search-input').toggledClass('active');
});

$('.menu-icon').bind('click', function(){
    $('.panel').toggledClass('show-menu');
    $('.menu').toggledClass('active');
})