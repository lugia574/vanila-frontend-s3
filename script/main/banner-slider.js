const main = new Swiper('.main-slide', {
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
});

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
