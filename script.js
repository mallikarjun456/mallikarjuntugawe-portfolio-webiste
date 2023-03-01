// const projectSlider = document.querySelector('.project-slider');
// const projectCards = document.querySelectorAll('.project-card');
// const totalProjects = projectCards.length;
// let currentProject = 1;

// function moveProject(direction) {
//   if (direction === 'next') {
//     currentProject++;
//     if (currentProject > totalProjects) {
//       currentProject = 1;
//     }
//   } else if (direction === 'prev') {
//     currentProject--;
//     if (currentProject < 1) {
//       currentProject = totalProjects;
//     }
//   }
//   let prevProject = currentProject - 1;
//   if (prevProject < 1) {
//     prev
//   }
// }


// const testimonialSlider = document.querySelector('.testimonial-slider');
// const testimonials = testimonialSlider.querySelectorAll('.testimonial');

// let activeTestimonial = 0;

// setInterval(() => {
//   testimonials[activeTestimonial].classList.remove('active');
//   activeTestimonial++;

//   if (activeTestimonial >= testimonials.length) {
//     activeTestimonial = 0;
//   }

//   testimonials[activeTestimonial].classList.add('active');
// }, 5000);

// const slides = document.querySelectorAll(".quote-slide");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// let currentSlide = 0;

// function showSlide(index) {
//   if (index < 0) {
//     currentSlide = slides.length - 1;
//   } else if (index >= slides.length) {
//     currentSlide = 0;
//   } else {
//     currentSlide = index;
//   }
  
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
  
//   slides[currentSlide].classList.add("active");
// }

// prevBtn.addEventListener("click", () => {
//   showSlide(currentSlide - 1);
// });

// nextBtn.addEventListener("click", () => {
//   showSlide(currentSlide + 1);
// });

// showSlide(currentSlide);

// const slider = document.querySelector(".inspiring-quotes");
// const slideWidth = slider.clientWidth;
// const slideCount = slider.children.length;
// let currentIndex = 0;

// // Move the slides to the left or right
// function moveSlides(direction) {
//   if (direction === "back") {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : slideCount - 1;
//   } else {
//     currentIndex = currentIndex < slideCount - 1 ? currentIndex + 1 : 0;
//   }
//   slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Add event listeners to the buttons
// const backBtn = document.querySelector("#back-btn");
// backBtn.addEventListener("click", () => moveSlides("back"));
// const nextBtn = document.querySelector("#next-btn");
// nextBtn.addEventListener("click", () => moveSlides("forward"));

// const quotes = document.querySelectorAll('.quote');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentQuote = 0;

// quotes[currentQuote].classList.add('active');

// prevBtn.addEventListener('click', () => {
//   quotes[currentQuote].classList.remove('active');
//   currentQuote--;
//   if (currentQuote < 0) {
//     currentQuote = quotes.length - 1;
//   }
//   quotes[currentQuote].classList.add('active');
// });

// nextBtn.addEventListener('click', () => {
//   quotes[currentQuote].classList.remove('active');
//   currentQuote++;
//   if (currentQuote > quotes.length - 1) {
//     currentQuote = 0;
//   }
//   quotes[currentQuote].classList.add('active');
// });



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

// setInterval(function() {
//   plusSlides(1);
// }, 5000);


