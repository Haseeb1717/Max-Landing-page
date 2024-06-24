
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
        const menuToggle = document.getElementById('menu-toggle');
        const navbarLinks = document.getElementById('navbar-links');

        menuToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });

  // Initialize AOS
  AOS.init({
    duration: 800 // Set your desired speed here (in milliseconds)
  });
</script>
