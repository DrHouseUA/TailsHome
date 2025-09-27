const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.querySelector('.mobile-menu-btn');
const closeBtn = document.getElementById('menuCloseBtn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('modal-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('modal-open');
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    links.forEach(l => l.classList.remove('active'));

    this.classList.add('active');
  });
});

// Button get friend
document.querySelectorAll('.mobile-nav-btn, .header-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const animalsSection = document.querySelector('#pets-list');
    if (animalsSection) {
      animalsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    mobileMenu.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

// close modal
document.querySelectorAll('.mobile-nav-link, .nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});
