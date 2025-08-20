// Scroll reveal
const faders = document.querySelectorAll('.fade-up');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.2});

faders.forEach(fader => appearOnScroll.observe(fader));

// Testimonials carousel
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial(){
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
  index = (index + 1) % testimonials.length;
}
setInterval(showTestimonial, 4000);

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!/\S+@\S+\.\S+/.test(email)){
    alert("Please enter a valid email.");
    return;
  }
  alert("Message sent successfully!");
  this.reset();
});
