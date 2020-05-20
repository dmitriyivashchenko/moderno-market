document.addEventListener('DOMContentLoaded', () => {
  let mixer = mixitup('.products__inner-items');

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
  })

});