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

// ============ Contact Form  ============
const form = document.getElementById("form");
const fullName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const weddingLocation = document.getElementById("wedding-location");
const errorElement = document.getElementById("error");
const clientMessage = document.getElementById("message");
const successElement = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  let messages = [];
  let success = [];
  //==================Name Validation==============
  if (fullName.value === "" || fullName.value == null) {
    messages.push("Name is required!");
  }
  //==================Phone Validation==============

  if (phone.value === "" || phone.value == null) {
    messages.push("Phone number is required!");
  }
  //==================Email Validation==============
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    messages.push("Please enter a valid email address!");
  }

  //==================Wedding Location Validation==============
  if (weddingLocation.value === "" || weddingLocation.value == null) {
    messages.push("Location is required!");
  }

  //==================Wedding Location Validation==============
  if (clientMessage.value === "" || clientMessage == null) {
    messages.push("Your message is required!");
  }

  if (messages.length === 0) {
    // If there are no validation errors, display success message
    success.push("The Email was sent!");
  }

  if (success.length > 0) {
    e.preventDefault();
    successElement.innerText = success.join(" \n ");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(" \n ");
  }
});
