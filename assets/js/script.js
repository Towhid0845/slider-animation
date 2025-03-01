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
    autoplay: false,
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
    autoplay: false,
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
  // Array of background colors for each slide
  const backgroundColors = [
    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(175, 82, 222, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 800px 650px, rgba(255, 204, 0, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 560px 450px, rgba(0, 122, 255, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 160px, rgba(175, 82, 222, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 500px 600px, rgba(52, 199, 89, 0.05), transparent),
     transparent`,
    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(255, 45, 85, 0.2), transparent), 
     radial-gradient(ellipse 200px 300px at 800px 650px, rgba(255, 204, 0, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 560px 450px, rgba(255, 204, 0, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 740px 160px, rgba(255, 45, 85, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 500px 600px, rgba(50, 173, 230, 0.05), transparent),
     transparent`,

    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(50, 173, 230, 0.2), transparent), 
      radial-gradient(ellipse 200px 300px at 800px 650px, rgba(88, 86, 214, 0.2), transparent), 
      radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent), 
      radial-gradient(ellipse 200px 300px at 560px 450px, rgba(255, 204, 0, 0.05), transparent), 
      radial-gradient(ellipse 200px 300px at 740px 160px, rgba(255, 45, 85, 0.05), transparent), 
      radial-gradient(ellipse 200px 300px at 500px 600px, rgba(50, 173, 230, 0.05), transparent), 
      transparent`,

    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(52, 199, 89, 0.1), transparent), 
   radial-gradient(ellipse 200px 300px at 800px 650px, rgba(50, 173, 230, 0.2), transparent), 
   radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent), 
   radial-gradient(ellipse 200px 300px at 560px 450px, rgba(255, 204, 0, 0.05), transparent), 
   radial-gradient(ellipse 200px 300px at 740px 160px, rgba(48, 176, 199, 0.05), transparent), 
   radial-gradient(ellipse 200px 300px at 500px 600px, rgba(50, 173, 230, 0.05), transparent), 
   transparent`,

    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(175, 82, 222, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 800px 650px, rgba(255, 204, 0, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 560px 450px, rgba(0, 122, 255, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 160px, rgba(175, 82, 222, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 500px 600px, rgba(52, 199, 89, 0.05), transparent),
     transparent`,
    `radial-gradient(ellipse 200px 300px at 480px 700px, rgba(255, 45, 85, 0.2), transparent), 
     radial-gradient(ellipse 200px 300px at 800px 650px, rgba(255, 204, 0, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 740px 400px, rgba(0, 199, 190, 0.2), transparent),
     radial-gradient(ellipse 200px 300px at 560px 450px, rgba(255, 204, 0, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 740px 160px, rgba(255, 45, 85, 0.05), transparent),
     radial-gradient(ellipse 200px 300px at 500px 600px, rgba(50, 173, 230, 0.05), transparent),
     transparent`,
  ];

  // Set initial background color for the first slide
  $(".slider_wrapper").css("background", backgroundColors[0]);

  // Change section background color on slide change
  $(".slider_thumb").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // Get the background color for the next slide
      const newColor = backgroundColors[nextSlide];

      // Update the section background color
      $(".slider_wrapper").css("background", newColor);
    }
  );
});
