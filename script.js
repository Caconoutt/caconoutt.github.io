//set the title freeze
setTimeout(function(){
  setInterval(function(){
      $('#title').attr('src',$('#title').attr('src'))
  },1)
}, 4000)

//image change when scroll
$(window).scroll(function(){
  let o=$(window), i=$("body"),t=$(".section"),s=o.scrollTop()+o.height()/3;
  t.each(function(){
      $(this).position().top<=s&&$(this).position().top+$(this).height()>s&&(i.
      removeClass(function(o,i){
          return i.match(/(^|\s)color-\s+/g)||[].join(" ")}
      ),$(".section").removeClass("active"),$(this).addClass("active"))}
  )}
).scroll();

//Fade In Animation
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

function phoneSize(){
  if ($(window).width() <= 405){
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

    $('#phone-size-img').removeClass('non-display')
  }
}

$(document).ready(function(){
  phoneSize();
  $(window).resize(phoneSize());

})

