$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        draggable: false,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        fade: true,
        appendDots:$('.slider__controls'),
    });
    // $('.slider-track').slick({
    //     arrows: false,
    //     slidesToShow:0,

    // });
});

function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
    const currentSlide = $slider.slick('getSlick').currentSlide
  
    $progressBar
      .css('background-size', `${calc}% 100%`)
      .attr('aria-valuenow', calc);
  
    $progressBarLabel.text(currentSlide);
  }
  
  const $slider = $('.slider');
  const $progressBar = $('.progress');
  const $progressBarLabel = $('.slider__label');
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress(nextSlide);
  });
  
  
  setProgress(0);

