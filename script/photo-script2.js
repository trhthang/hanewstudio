$(document).ready(function() {
  //-----------------------------------------------------------
  // Gallery Load
  //-----------------------------------------------------------
  for (var i=1; i<5; i++){
    $('.gallery').append('<div class="item"><img src="" alt="" class="photo" /></div>');
  };
  $('.gallery img').each(function(index){
    var x = index + 1;
    $(this).attr('alt', 'poto' + x);
    $(this).attr('src', 'gallery/poto'+ x +'.jpg');
  });
  //-----------------------------------------------------------
  // Slick Carousel
  //-----------------------------------------------------------
  $('.gallery').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
  }).mousewheel(function(e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        $(this).slick('slickNext');
      }
      else {
        $(this).slick('slickPrev');
      }
  });
});