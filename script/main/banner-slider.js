// 메인배너 text 슬라이드
const textSlider = new Swiper('.text-slider', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 1500,
  fadeEffect: { crossFade: true },
  loop: true,
  autoplay: {
    delay: 2000,
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

// 메인 배너 이미지 슬라이드
const imageSlider = new Swiper('.image-slider', {
  slidesPerView: 1,
  loop: true,
});

textSlider.controller.control = imageSlider;

// 공모전 슬라이드
const contestSlider = new Swiper('.contest-swiper', {
  spaceBetween: 16,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.contest-button-next',
    prevEl: '.contest-button-prev',
  },
  breakpoints: {
    // 모바일 (0~767px)
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});

// 자격증 슬라이드
const licenseSlider = new Swiper('.license-swiper', {
  spaceBetween: 16,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.license-button-next',
    prevEl: '.license-button-prev',
  },
  breakpoints: {
    // 모바일 (0~767px)
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});

// let currentbanner = document.querySelector('.main-img');s
// playStop.addEventListener('click', e => {
//   if (!playStop.classList.contains('active')) {
//     main.autoplay.stop();
//     playStop.classList.add('active');
//   } else {
//     main.autoplay.start();
//     playStop.classList.remove('active');
//   }
// });
