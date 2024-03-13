// sliders
$(document).ready(function () {
  const slickSlider = $(".slick-slider").slick({
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
    appendDots: $(".slider__dots"),
  });
  $(".news-content").slick({
    slidesToShow: 4,
    autoplay: false,
    draggable: false,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    fade: false,
  });
  $(".feedback__slider").slick({
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    draggable: false,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    fade: false,
    appendDots: $(".feedback__dots"),
  });

  const progressBar = document.querySelector(".progress-circle");
  const textCurrent = document.querySelector(".text__current");
  const textTotal = document.querySelector(".text__total");
  const duration = slickSlider.slick("slickGetOption", "autoplaySpeed"); // Длительность автопрокрутки в миллисекундах
  const circumference = 2 * Math.PI * 20; // Длина окружности круга

  function updateProgress() {
    let currentTime = 0;
    const interval = 180; // Интервал обновления прогресса

    const progressInterval = setInterval(() => {
      currentTime += interval;
      const progress = (currentTime / duration) * 100;
      const currentSlide = slickSlider.slick("slickCurrentSlide") + 1;

      const offset = circumference - (progress / 100) * circumference;

      progressBar.style.strokeDashoffset = offset;
      textCurrent.textContent = `${currentSlide}`;
      textTotal.textContent = `/${slickSlider.slick("getSlick").slideCount}`;

      if (currentTime >= duration) {
        clearInterval(progressInterval);
        progressBar.style.strokeDashoffset = circumference; // Сброс заполнения круга на начальное значение
      }
    }, interval);

    progressBar.style.strokeDashoffset = circumference;
  }

  $(".slick-slider").on("afterChange", () => {
    updateProgress();
  });

  updateProgress();
})


// function set active to tab, onclick listener, remove active from other tabs
const setActiveTab = (tabs) => {
  tabs.forEach((item) => {
    item.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"))
      item.classList.add("active")
    })
  })
}

// tabs age
const age = document.querySelectorAll(".age__item");
setActiveTab(age)

// tabs services
const tabsServices = document.querySelectorAll(".services__item");
setActiveTab(tabsServices)

//input search
const phone = document.querySelector(".phone")
const gaze = document.querySelector(".gaze")
const search = document.querySelector(".search")
const searchBlock = document.querySelector(".search-block")
const searchImg = document.querySelectorAll(".search__img")

search.addEventListener('click', ()=> {
  searchBlock.style.display = 'flex'
  phone.style.display = gaze.style.display = search.style.display = 'none'
})

searchImg.forEach((item) => {
  item.addEventListener('click', ()=> {
    console.log(searchBlock)
    searchBlock.style.display = 'none'
    phone.style.display = gaze.style.display = search.style.display = 'flex'
  })
})


// accordion questions
const acc = document.querySelectorAll(".question__head")
const allDescr = document.querySelectorAll(".descr")
acc[0].nextElementSibling.style.maxHeight = "124px"

acc.forEach((item) => {
  item.addEventListener("click", (e) => {
    allDescr.forEach((item) => item.style.maxHeight = null )
    acc.forEach((item) => item.classList.remove("active"))
    
    e.target.classList.add("active")
    e.target.nextElementSibling.style.maxHeight = "124px"
  })
})
