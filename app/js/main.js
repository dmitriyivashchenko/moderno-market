document.addEventListener('DOMContentLoaded', () => {

  $('.js-range-slider').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600
  });

  $('.rate-stars').rateYo({
      rating: 5,
      starWidth: '12px',
      readOnly: true,
      ratedFill: '#ffa726'
    });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.icon-th-list').on('click', () => {
    $('.products-page__items .product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });

  $('.icon-th-large').on('click', () => {
    $('.products-page__items .product__item').removeClass('list');
    $('.icon-th-list').removeClass('active');
    $('.icon-th-large').addClass('active');
  });

  let mixer = mixitup('.products__inner-items');

});

