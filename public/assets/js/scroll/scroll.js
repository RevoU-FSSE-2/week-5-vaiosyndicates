$(document).ready(() => {

  $(window).scroll( function(){

    $('.orchestra').each( function(i){
        let bottom_of_object = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        }
    }); 

    $('.integrate').each( function(i){
      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
      }
    })

    $('.our-client').each( function(i){
      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
      }
    })
  });

  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

})
