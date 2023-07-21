const swiper = new Swiper('.swiper', {
  effect: "coverflow",
      grabCursor: false,
      allowTouchMove: false,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      loopedSlides: 2,
      loopPreventsSliding: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      spaceBetween: 80,
});