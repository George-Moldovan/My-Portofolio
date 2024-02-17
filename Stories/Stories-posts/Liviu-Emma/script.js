// ============ Hamburger variables ============
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

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

// ============ POPULATE POST WITH IMAGES Q22W2===========
document.addEventListener("DOMContentLoaded", function () {
  let images = [
    "Liviu-Emma-1.jpg",
    "Liviu-Emma-2.jpg",
    "Liviu-Emma-3.jpg",
    "Liviu-Emma-4.jpg",
    "Liviu-Emma-5.jpg",
    "Liviu-Emma-6.jpg",
    "Liviu-Emma-7.jpg",
    "Liviu-Emma-8.jpg",
    "Liviu-Emma-9.jpg",
    "Liviu-Emma-10.jpg",
    "Liviu-Emma-11.jpg",
    "Liviu-Emma-12.jpg",
    "Liviu-Emma-13.jpg",
    "Liviu-Emma-14.jpg",
    "Liviu-Emma-15.jpg",
    "Liviu-Emma-16.jpg",
    "Liviu-Emma-17.jpg",
    "Liviu-Emma-18.jpg",
    "Liviu-Emma-19.jpg",
    "Liviu-Emma-20.jpg",
    "Liviu-Emma-21.jpg",
    "Liviu-Emma-22.jpg",
    "Liviu-Emma-23.jpg",
    "Liviu-Emma-24.jpg",
    "Liviu-Emma-25.jpg",
    "Liviu-Emma-26.jpg",
    "Liviu-Emma-27.jpg",
    "Liviu-Emma-28.jpg",
    "Liviu-Emma-29.jpg",
    "Liviu-Emma-30.jpg",
    "Liviu-Emma-31.jpg",
    "Liviu-Emma-32.jpg",
    "Liviu-Emma-33.jpg",
    "Liviu-Emma-34.jpg",
    "Liviu-Emma-35.jpg",
    "Liviu-Emma-36.jpg",
    "Liviu-Emma-37.jpg",
    "Liviu-Emma-38.jpg",
    "Liviu-Emma-39.jpg",
    "Liviu-Emma-40.jpg",
    "Liviu-Emma-41.jpg",
    "Liviu-Emma-42.jpg",
    "Liviu-Emma-43.jpg",
    "Liviu-Emma-44.jpg",
    "Liviu-Emma-45.jpg",
    "Liviu-Emma-46.jpg",
    "Liviu-Emma-47.jpg",
    "Liviu-Emma-48.jpg",
    "Liviu-Emma-49.jpg",
  ];
  // ----- functiont to populate photo container -------

  function populatePhotoWrapper() {
    let photoWrapper = document.querySelector(".photo-wrapper");
    images.forEach(function (imageUrl) {
      let img = document.createElement("img");
      img.src = imageUrl;
      img.classList.add("blog-post-image");
      photoWrapper.appendChild(img);
    });
  }

  populatePhotoWrapper();
});
