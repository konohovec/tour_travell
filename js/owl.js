$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
    navText: ["<img src='img/previous.svg'>", "<img src='img/next.svg'>"],
  	autoplay:false, 
    smartSpeed:2000, 
    autoplayTimeout:3000,
  });
});