// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var icon = this.querySelector('.faq-chevron');
      var isOpen = answer.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-answer').forEach(function (a) { a.classList.remove('open'); });
      document.querySelectorAll('.faq-chevron').forEach(function (i) { i.style.transform = 'rotate(0deg)'; });
      if (!isOpen) {
        answer.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Mobile nav toggle
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links on the same page
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll to hash on page load (for situations page)
  if (window.location.hash) {
    setTimeout(function () {
      var el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }
});
