const textSlider = new Swiper('.text-slider', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 1500,
  fadeEffect: { crossFade: true },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-progressbar',
    type: 'progressbar',
  },
  on: {
    slideChange: function () {
      const slides = this.slides;
      const activeIndex = this.activeIndex;

      const activeSlide = slides[activeIndex];
      const isFirstScript = activeSlide.classList.contains('first-script');

      const nextBtn = document.querySelector('.swiper-button-next');
      const prevBtn = document.querySelector('.swiper-button-prev');
      const progressbar = document.querySelector('.swiper-pagination-progressbar-fill');
      console.log(progressbar);

      // 모든 관련 요소에서 이전 클래스 제거
      [nextBtn, prevBtn, progressbar].forEach(el => {
        if (el) {
          el.classList.remove('black', 'white');
        }
      });

      const colorClass = isFirstScript ? 'black' : 'white';

      // 필요한 클래스 추가
      [nextBtn, prevBtn, progressbar].forEach(el => {
        if (el) {
          el.classList.add(colorClass);
        }
      });
    },
  },
});

const imageSlider = new Swiper('.image-slider', {
  slidesPerView: 1,
  loop: true,
});

textSlider.controller.control = imageSlider;

let currentbanner = document.querySelector('.main-img');
// playStop.addEventListener('click', e => {
//   if (!playStop.classList.contains('active')) {
//     main.autoplay.stop();
//     playStop.classList.add('active');
//   } else {
//     main.autoplay.start();
//     playStop.classList.remove('active');
//   }
// });
