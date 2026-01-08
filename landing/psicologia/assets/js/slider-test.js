alert('slider-test carregou');

jQuery(document).ready(function ($) {
  alert('DOM pronto');

  $('#slider_1').owlCarousel({
    singleItem: true,
    autoPlay: 3000
  });
});
