var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:15,
    autoplay: true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,

        },
        800:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
});

owl[0].addEventListener('mousewheel', e => {
    if (e.deltaY > 0) {
        $('.owl-carousel').trigger('next.owl', 0);
    } else {
      $('.owl-carousel').trigger('prev.owl', 0);
  }
  e.preventDefault();
}, false);


/*$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');*/

$(function(){
2
  loopcounter('myCountdown');
3
});


$(function(){
  $('#countdown').countdown({
    year: 2019, // YYYY Format
    month: 12, // 1-12
    day: 25, // 1-31
    hour: 0, // 24 hour format 0-23
    minute: 0, // 0-59
    second: 0, // 0-59
});
});

$('.counter').counterUp({
  delay: 10,
  time: 250,
});

