$(document).ready(function () {
  const slickSlider = $('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    dots: true,
    draggable: false,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    fade: true,
    appendDots: $('.slider__dots'),
  });
  $('.news-content').slick({
    slidesToShow: 4,
    // centerMode: true,
    // variableWidth: true,
    autoplay: false,
    draggable: false,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    fade: false,
  });
  // $('.feedback__slider').slick({
  //   slidesToShow: 1,
  //   // centerMode: true,
  //   // variableWidth: true,
  //   autoplay: false,
  //   dots: true,
  //   draggable: false,
  //   waitForAnimate: false,
  //   centerMode: false,
  //   variableWidth: false,
  //   fade: false,
  //   appendDots: $('.feedback__dots'),
  // });

  const progressBar = document.querySelector('.progress-circle');
  // const progressText = document.querySelector('.progress-text');
  const textCurrent = document.querySelector('.text__current');
  const textTotal = document.querySelector('.text__total');
  const duration = slickSlider.slick('slickGetOption', 'autoplaySpeed'); // Длительность автопрокрутки в миллисекундах
  const circumference = 2 * Math.PI * 20; // Длина окружности круга

  function updateProgress() {
    let currentTime = 0;
    const interval = 180; // Интервал обновления прогресса

    const progressInterval = setInterval(() => {
      currentTime += interval;
      const progress = (currentTime / duration) * 100;
      const currentSlide = slickSlider.slick('slickCurrentSlide') + 1;

      const offset = circumference - (progress / 100) * circumference;

      progressBar.style.strokeDashoffset = offset;
      textCurrent.textContent = `${currentSlide}`
      textTotal.textContent = `/${slickSlider.slick('getSlick').slideCount}`;

      if (currentTime >= duration) {
        clearInterval(progressInterval);
        progressBar.style.strokeDashoffset = circumference; // Сброс заполнения круга на начальное значение
      }
    }, interval);

    progressBar.style.strokeDashoffset = circumference; // Сброс заполнения круга на начальное значение
  }

  $('.slick-slider').on('afterChange', () => {
    updateProgress();
  });

  updateProgress();
});