$(document).ready(() => {
  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }) 
  
})