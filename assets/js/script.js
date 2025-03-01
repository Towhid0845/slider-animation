// (function ($) {
//   ("use strict");

//   function alefoxSlickInit() {
//     // slick slider
//     let alefoxslickCarousel = $(".slick_carousel");
//     if (alefoxslickCarousel.length) {
//       alefoxslickCarousel.each(function () {
//         let elm = $(this);
//         let options = elm.data("slick-options");
//         let alefoxslickCarousel = elm.slick(
//           "object" === typeof options ? options : JSON.parse(options)
//         );
//       });
//     }
//   }
  
//   $(window).on("load", function () {
//     alefoxSlickInit()
//   })
// })(jQuery);


$(document).ready(function () {
  // Initialize the main slider
  $(".slider_carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider_thumb",
    autoplay: true,
    dots: false,
    centerPadding: 0,
    arrows: false,
    speed: 1000, 
    nextArrow:
      '<button class="next"><i class="icon-right-arrow-two1"></i></button>',
    prevArrow:
      '<button class="prev"><i class="icon-right-arrow-two"></i></button>',
  });

  // Initialize the thumb slider
  $(".slider_thumb").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    asNavFor: ".slider_carousel",
    focusOnSelect: true,
    vertical: false,
    verticalSwiping: true,
    dots: false,
    centerPadding: 0,
    arrows: false,
    autoplaySpeed: 2000, 
    speed: 1000, 
  });
});