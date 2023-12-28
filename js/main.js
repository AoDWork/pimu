$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        draggable: false,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        fade: true,
        appendDots:$('.slider__dots'),
    });
});