$(function(){
var btn = $('.scrollup');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '2000');
  });
})
	var h_hght = 94; // высота шапки
	var h_mrg = -10;    // отступ когда шапка уже не видна

	$(function(){

		var elem = $('.header-wrapper');
		var top = $(this).scrollTop();

		if(top > h_hght){
			elem.css('top', h_mrg);
		}           

		$(window).scroll(function(){
			top = $(this).scrollTop();

			if (top+h_mrg < h_hght) {
				elem.css('top', (h_hght-top));
			} else {
				elem.css('top', h_mrg);
			}
		});
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
	});
$(window).scroll(function() {
var height = $(window).scrollTop();
 /*Если сделали скролл на 100px задаём новый класс для header*/
if(height > 100){
$('.header').addClass('fixed');
} else{
/*Если меньше 100px удаляем класс для header*/
$('.header').removeClass('fixed');
}
});