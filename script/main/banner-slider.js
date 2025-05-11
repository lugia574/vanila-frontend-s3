const textSlider = new Swiper('.text-slider', {
  slidesPerView: 1,
  // effect: 'fade',
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-progressbar',
    type: 'progressbar',
  },
});

const imageSlider = new Swiper('.image-slider', {
  slidesPerView: 1,
  loop: true,
});

textSlider.controller.control = imageSlider;

// const contest = new Swiper('.contest-list', {
//   slidesPerView: 3,
//   spaceBetween: 60,
//   loop: true,
//   autoplay: {
//     delay: 50000,
//   },
// });

// let pro = new Swiper('.main-slide', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination2',
//     type: 'progressbar',
//   },
// });

// main.controller.control = pro;

// let playStop = document.querySelector('.playStop-btn');
// playStop.addEventListener('click', e => {
//   if (!playStop.classList.contains('active')) {
//     main.autoplay.stop();
//     playStop.classList.add('active');
//   } else {
//     main.autoplay.start();
//     playStop.classList.remove('active');
//   }
// });
