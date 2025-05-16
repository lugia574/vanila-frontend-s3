// 자격증 슬라이드
const licenseSlider = new Swiper(".license-swiper", {
  spaceBetween: 16,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: ".license-button-next",
    prevEl: ".license-button-prev",
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
