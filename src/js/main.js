jQuery(document).ready(function($) {
  $(".portfolio__item__picture").hover(function() {
    $(this).children('.portfolio__item__picture-hover').show();
  }, function() {
     $(this).children('.portfolio__item__picture-hover').hide();
  });
  // $('input, textarea').placeholder({ customClass: '.placeholder' });
});
