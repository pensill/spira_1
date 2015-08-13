$( document ).ready(function() {


  //slider
  $('#send').click(function() {
     $(".presentation").toggleClass('fadeOutLeft');
     $('.feedback').toggleClass('fadeInRight');
  });

  $('.back-button').click(function() {
     $('.feedback').toggleClass('fadeOutRight');
     $('.feedback').fadeOut();
     $(".presentation").toggleClass('fadeOutLeft');
     $(".presentation").toggleClass('fadeInLeft');
     
  });
  //slider end




});