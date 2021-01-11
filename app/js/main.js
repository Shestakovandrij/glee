$(function(){

  
  function scrollMenu() {
    let menu = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (pageYOffset >= document.documentElement.clientHeight / 15) {
        menu.style['background-color'] = 'rgba(15, 10, 20, .5)'
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