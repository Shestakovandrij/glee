$(function(){

  
  $('.main-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:4000,
    fade: true
  });
  
  $('.menu__btn').on('click', function(){
    $('.header__inner').toggleClass('header__inner--active')
  });

  var mixer = mixitup('.product__items', {
    selectors: {
      control: '.product__filters > .nav-filter__btn'
    }
  });
  var mixer2 = mixitup('.new-design__items', {
    selectors: {
      control: '.new-design__filters > .nav-filter__btn'
    }
  });
  
  

});