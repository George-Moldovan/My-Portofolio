// ============ Hamburger variables ============
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
// ============ Slider variables ============
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const autoSlide = true;
const intervalTime = 2500;
let slideInterval;

// ============ Hamburger  ============

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
  })
);

// ============ Slider ============
// --------next Button------------
const nextSlide = () => {
  // Get current Class
  const current = document.querySelector(".current");
  // Remove current Class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    //add current class to next sibiling
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//-----------Previous Button-----------
const prevSlide = () => {
  // Get current Class
  const current = document.querySelector(".current");
  // Remove current Class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    //add current class to prev sibiling
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
//----------- Button Events -----------

nextBtn.addEventListener("click", (e) => {
  nextSlide();
});
prevBtn.addEventListener("click", (e) => {
  prevSlide();
});
//----------- Auto Slide -----------
if (autoSlide) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
