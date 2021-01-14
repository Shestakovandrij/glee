$(function(){

  $('.product-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  $('.product-item__numb').styler();

  $('.product-slide__thumb').slick({
    asNavFor:'.product-slide__origin',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,

  });
  $('.product-slide__origin').slick({
    asNavFor:'.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.related__items').slick({
    slidesToShow: 4,
    arrows: true,
  });
  
  function scrollMenu() {
    let menu = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (pageYOffset >= document.documentElement.clientHeight / 15) {
        menu.style['background-color'] = 'rgba(0, 0, 0, .85)'
        menu.style['height'] = '120px'
      } else {
        menu.style['background-color'] = 'transparent'
        menu.style['height'] = '104px'
      }
    });
  }
  scrollMenu();
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    
    onStart: function (data)  {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
  });
  
  $(".star").rateYo({
    rating: 3.6,
    starWidth: "15px"
  });
  $(".product-item__rat").rateYo({
    starWidth: "25px",
  });
  
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