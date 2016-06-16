/*

Envy by WeTheme (http://www.wetheme.com)
Custom JS

Last Update:
2nd December 2014
- Added Sidr code

*/

// FlexSlider

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: false,
		controlsContainer: ".flexslider-container",
		animationLoop: false
  });
});

// Mobile Browser Menu

$("select#mobile-menu").change(function() {
  window.location = $(this).find("option:selected").val();
});

// Zoom!

$(document).ready(function(){
  $('.featured-image-div').zoom();		
  $('a.image-swap').click(function() {
    var newImage = $(this).attr('href');
    $( '.featured-image-div img' ).attr({ src: newImage }); 
    return false;
  });
  
});

// FancyBox

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".fancybox-instagram").fancybox({
		padding : 0
	});
});

$(".various").fancybox();

// Sidr

$(document).ready(function() {
	$('.slide-menu').sidr({
		side: 'right'
	});
});

$('#responsive-menu-button').sidr({
	name: 'sidr-mobile',
	source: '#mobile-navigation'
});

// matchHeight

$(function() {
    $('.product-grid li .indiv-product').matchHeight();
});

/* Sticky Menu */

$(document).ready(function(){
	$(".mobile-hamburger-menu").sticky({topSpacing:0});
});
  
$(document).ready( function() {
	$("#sticky-menu").stick_in_parent({bottoming:false})
});