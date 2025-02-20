const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = document.querySelectorAll(".review-slide");
const dots = document.querySelectorAll(".dot");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
      dot.classList.remove("inactive");
    } else {
      dot.classList.remove("active");
      dot.classList.add("inactive");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

nextButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});

// Show the first slide initially
showSlide(currentSlideIndex);

// Function to adjust button position dynamically
function adjustButtonPosition() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // For smaller screens (less than 768px), position buttons inside
    prevButton.style.left = "10px";
    nextButton.style.right = "10px";
  } else {
    // For larger screens, position buttons outside
    prevButton.style.left = "-60px";
    nextButton.style.right = "-60px";
  }
}

// Call the function initially and whenever the window is resized
adjustButtonPosition();
window.addEventListener("resize", adjustButtonPosition);
