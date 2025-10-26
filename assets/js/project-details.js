// Project Details Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll fade-in animation for gallery images
  const galleryImages = document.querySelectorAll('.gallery-image');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  galleryImages.forEach(image => {
    observer.observe(image);
  });

  // Set footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
