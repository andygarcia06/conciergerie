const swiper = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
        init: function() {
          this.slides[1].classList.add('active-slide');
        },
        slideChange: function() {
          var slides = this.slides;
          for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active-slide');
          }
          slides[this.activeIndex].classList.add('active-slide');
        }
      },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });