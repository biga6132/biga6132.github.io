window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Adjust if your navbar has a different selector
    if (window.scrollY > 50) { // Check if the page is scrolled more than 50 pixels
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


// document.addEventListener("DOMContentLoaded", function() {
//   var observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('fill');
//       }
//     });
//   }, {
//     threshold: 1.0 // Adjust if needed - 1.0 means 100% of the target must be visible
//   });

//   // Target elements with the 'skill-per' class
//   document.querySelectorAll('.skill-per').forEach(skill => {
//     observer.observe(skill);
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fill');
      } else {
        entry.target.classList.remove('fill');
        entry.target.style.width = '0'; // Reset the width when not in view
      }
    });
  }, {
    threshold: 0.5 // Adjust this value as needed
  });

  document.querySelectorAll('.skill-per').forEach(skill => {
    observer.observe(skill);
  });
});

