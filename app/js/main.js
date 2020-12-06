$(function(){

  $('.main-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:4000,
    fade: true
  });

  var mixer = mixitup('.product__items', {
    selectors: {
      control: '.nav-filter__btn'
    }
  });
  var mixer = mixitup('.new-design__items', {
    selectors: {
      control: '.nav-filter__btn'
    }
  });

});