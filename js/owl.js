$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
      navText: ["<img src='img/previous.svg'>", "<img src='img/next.svg'>"],
  	autoplay:false, //Автозапуск слайдера
    smartSpeed:2000, //Время движения слайда
    autoplayTimeout:3000,
  });
});