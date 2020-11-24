$(function(){

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:4000,
    fade: true
  });

  var mixer = mixitup('.product__items', {
    selectors: {
      control: '.product__btn'
    }
  });
  var mixer = mixitup('.new-product__items', {
    selectors: {
      control: '.new-product__btn'
    }
  });

});