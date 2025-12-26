
function phoneSize(){
    if ($(window).width() < 450){
      console.log('hi');
      
      $('.section').removeClass('section');
  
      $('.section-img-inner-index').addClass('pImgIndex');
      $('.section-img-inner-index').removeClass('section-img-inner-index');
      
      $('.section-img').addClass('pImgIndexContainer');
      $('.section-img').removeClass('section-img');
  
      $('.section-body').addClass('pMain');
      $('.section-body').removeClass('section-body');
      
      $('.section-text').removeClass('section-text');
  
      $('#context-text').addClass('context-text-margin-top');
  
      $('.hunder').addClass('hunder-phone');
      $('.hunder').removeClass('hunder');
  
      $('#phone-size-img').removeClass('non-display');
      $('#logo1').addClass('twoLogos');
      $('#logo2').addClass('twoLogos');
  
      $('#header').css('height', '80px');
    }
  }
  
  $(document).ready(function(){
    phoneSize();
    $(window).resize(phoneSize);
  
  });
  
  