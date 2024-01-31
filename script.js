window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Adjust if your navbar has a different selector
    if (window.scrollY > 50) { // Check if the page is scrolled more than 50 pixels
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


document.addEventListener("DOMContentLoaded", function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fill');
      }
    });
  }, {
    threshold: 1.0 // Adjust if needed - 1.0 means 100% of the target must be visible
  });

  // Target elements with the 'skill-per' class
  document.querySelectorAll('.skill-per').forEach(skill => {
    observer.observe(skill);
  });
});

