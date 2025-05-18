export const licenseSlider = () => {
  new Swiper(".img_banner", {
    spaceBetween: 16,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".license-button-next",
      prevEl: ".license-button-prev",
    },
  });
};
