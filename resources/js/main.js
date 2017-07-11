$(document).ready(function(){
  var $label = $('.flex-label h3');
  
  // If this is not IE
  if( !$('html').hasClass('no-smil') ) {
    $('.js-trigger').hover(function(){
      $(this).find($label).toggleClass('has-mouseover');
    }).click(function(){
      $('.is-visible').removeClass('is-visible');
      $('.is-active').removeClass('is-active');
      $(this).toggleClass('is-active').next('.js-target').addClass('is-visible');
      return false;
    });
  }
});