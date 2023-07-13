$(document).ready(() => {
  $('#mobile-open').on('click', (e) => {
    e.preventDefault();
    $('#mobile-close').css("display", "block")
    $('#mobile-open').css("display", "none")
    $('#aside').fadeOut(200, function(){
      $(this).css("display", "block");
    })
  })

  $('#mobile-close').on('click', (e) => {
    e.preventDefault();
    $('#mobile-close').css("display", "none")
    $('#mobile-open').css("display", "block")
    $('#aside').fadeOut(200, function(){
      $(this).css("display", "none");
    })
  })
})