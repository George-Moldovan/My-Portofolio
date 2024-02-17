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
    "Bogdan-Miruna-1.jpg",
    "Bogdan-Miruna-2.jpg",
    "Bogdan-Miruna-3.jpg",
    "Bogdan-Miruna-4.jpg",
    "Bogdan-Miruna-5.jpg",
    "Bogdan-Miruna-6.jpg",
    "Bogdan-Miruna-7.jpg",
    "Bogdan-Miruna-8.jpg",
    "Bogdan-Miruna-9.jpg",
    "Bogdan-Miruna-10.jpg",
    "Bogdan-Miruna-11.jpg",
    "Bogdan-Miruna-12.jpg",
    "Bogdan-Miruna-13.jpg",
    "Bogdan-Miruna-14.jpg",
    "Bogdan-Miruna-15.jpg",
    "Bogdan-Miruna-16.jpg",
    "Bogdan-Miruna-17.jpg",
    "Bogdan-Miruna-18.jpg",
    "Bogdan-Miruna-19.jpg",
    "Bogdan-Miruna-20.jpg",
    "Bogdan-Miruna-21.jpg",
    "Bogdan-Miruna-22.jpg",
    "Bogdan-Miruna-23.jpg",
    "Bogdan-Miruna-24.jpg",
    "Bogdan-Miruna-25.jpg",
    "Bogdan-Miruna-26.jpg",
    "Bogdan-Miruna-27.jpg",
    "Bogdan-Miruna-28.jpg",
    "Bogdan-Miruna-29.jpg",
    "Bogdan-Miruna-30.jpg",
    "Bogdan-Miruna-31.jpg",
    "Bogdan-Miruna-32.jpg",
    "Bogdan-Miruna-33.jpg",
    "Bogdan-Miruna-34.jpg",
    "Bogdan-Miruna-35.jpg",
    "Bogdan-Miruna-36.jpg",
    "Bogdan-Miruna-37.jpg",
    "Bogdan-Miruna-38.jpg",
    "Bogdan-Miruna-39.jpg",
    "Bogdan-Miruna-40.jpg",
    "Bogdan-Miruna-41.jpg",
    "Bogdan-Miruna-42.jpg",
    "Bogdan-Miruna-43.jpg",
    "Bogdan-Miruna-44.jpg",
    "Bogdan-Miruna-45.jpg",
    "Bogdan-Miruna-46.jpg",
    "Bogdan-Miruna-47.jpg",
    "Bogdan-Miruna-48.jpg",
    "Bogdan-Miruna-49.jpg",
    "Bogdan-Miruna-50.jpg",
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
