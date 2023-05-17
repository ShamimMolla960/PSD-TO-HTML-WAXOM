$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

$(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });