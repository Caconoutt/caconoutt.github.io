function phoneSize(){
    if ($(window).width() < 450){
      console.log('hi');

      //header
      $('#header').css('height', '80px');
      $('#header1').css('display', 'none');
      $('#header2').css('display', 'none');
      $('#header3').css('display', 'none');
      $('.logo3').css('display', 'none');
      $('.logo1').addClass('twoLogos');
      $('.logo2').addClass('twoLogos');

      //body
      $('.section').removeClass('section');
  
      $('.section-img-inner-index').removeClass('section-img-inner-index');
      $('.section-img').removeClass('section-img');
  
      $('#phoneBody').addClass('expMain');
      $('.section-body').addClass('pSectionBody');
      $('.section-body').removeClass('section-body');
      
      //shift text for img space
      $('div.section-text p:eq(2)').addClass('phoneText');
      $('.section-text').removeClass('section-text');
      $('p#phoneSscText').css('margin-top', '40px');
      $('p#phoneAdvText').css('margin-top', '50px');
      $('p#phoneNewText').css('margin-top', '55px');

      //replace h4 subtitle to h5
      $('h4').replaceWith(function(){
        return $('<h5>', {html:$(this).html()});
      })
      $('html').css('font-size','16px');

      //img
      $('#pUoftSta').removeClass('non-display');
      $('#pSsc').removeClass('non-display');
      $('#pAdviza').removeClass('non-display');
      $('#pNew').removeClass('non-display');
    }
  }
  
$(document).ready(function(){
    phoneSize();
    $(window).resize(phoneSize);
});

  