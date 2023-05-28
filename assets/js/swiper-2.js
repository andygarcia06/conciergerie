
const header = document.querySelector('.conciergerie-header');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    grabCursor: true,
    // mousewheel: true,
    effect: "fade",
    effect: "fade",
    keyboard: {
        enabled: true,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      prevEl: '.custom-swiper-button-prev',
      nextEl: '.custom-swiper-button-next',
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // swiper.on('slideChange', function() {
  //   if (swiper.activeIndex === 2) {
  //     header.style.backgroundColor = 'white';
  //   }
  // });

  window.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
  
    video.addEventListener('loadeddata', function() {
      setTimeout(function() {
        var preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';
        video.style.display = 'block';
        video.play();
      }, 4000); // Attendre 2 secondes (2000 millisecondes) avant de masquer le préchargeur
    });
  });


  




  