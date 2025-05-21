// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Menu toggle
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // prevent triggering outside click immediately
          mobileMenu.classList.toggle('hidden');
        });

        // Close when clicking outside the mobile menu
        document.addEventListener('click', (e) => {
          const isClickInsideMenu = mobileMenu.contains(e.target);
          const isClickOnBtn = menuBtn.contains(e.target);
          if (!isClickInsideMenu && !isClickOnBtn) {
            mobileMenu.classList.add('hidden');
          }
        });

        // Close when any nav link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      }
    })
    .catch(err => console.error('Failed to load navbar:', err));
});
