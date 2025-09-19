// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiperComment = new Swiper('.swiper-comment', {
  // configure Swiper to use modules

  navigation: {
    nextEl: '.swiper-comment-button-next',
    prevEl: '.swiper-comment-button-prev',
  },
  pagination: {
    el: '.swiper-comment-pagination',
    type: 'bullets',
    clickable: true,
  },
});
