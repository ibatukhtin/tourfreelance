document.addEventListener('DOMContentLoaded', function () {
  let splide = new Splide('.splide', {
    type: 'loop',
    pagination: false,
    perMove: 1,
    perPage: 2,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
    autoplay: 'pause',
    intersection: {
      rootMargin: '-50px',
      inView: {
        autoScroll: true,
      },
      outView: {
        autoScroll: false,
      },
    },
    autoScroll: {
      speed: 1.5,
      breakpoints: {
        640: {
          speed: 1,
        },
      },
    },
  });
  splide.mount(window.splide.Extensions);
});
