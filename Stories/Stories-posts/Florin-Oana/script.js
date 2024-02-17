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
    "Florin-Oana-1.jpg",
    "Florin-Oana-2.jpg",
    "Florin-Oana-3.jpg",
    "Florin-Oana-4.jpg",
    "Florin-Oana-5.jpg",
    "Florin-Oana-6.jpg",
    "Florin-Oana-7.jpg",
    "Florin-Oana-8.jpg",
    "Florin-Oana-9.jpg",
    "Florin-Oana-10.jpg",
    "Florin-Oana-11.jpg",
    "Florin-Oana-12.jpg",
    "Florin-Oana-13.jpg",
    "Florin-Oana-14.jpg",
    "Florin-Oana-15.jpg",
    "Florin-Oana-16.jpg",
    "Florin-Oana-17.jpg",
    "Florin-Oana-18.jpg",
    "Florin-Oana-19.jpg",
    "Florin-Oana-20.jpg",
    "Florin-Oana-21.jpg",
    "Florin-Oana-22.jpg",
    "Florin-Oana-23.jpg",
    "Florin-Oana-24.jpg",
    "Florin-Oana-25.jpg",
    "Florin-Oana-26.jpg",
    "Florin-Oana-27.jpg",
    "Florin-Oana-28.jpg",
    "Florin-Oana-29.jpg",
    "Florin-Oana-30.jpg",
    "Florin-Oana-31.jpg",
    "Florin-Oana-32.jpg",
    "Florin-Oana-33.jpg",
    "Florin-Oana-34.jpg",
    "Florin-Oana-35.jpg",
    "Florin-Oana-36.jpg",
    "Florin-Oana-37.jpg",
    "Florin-Oana-38.jpg",
    "Florin-Oana-39.jpg",
    "Florin-Oana-40.jpg",
    "Florin-Oana-41.jpg",
    "Florin-Oana-42.jpg",
    "Florin-Oana-43.jpg",
    "Florin-Oana-44.jpg",
    "Florin-Oana-45.jpg",
    "Florin-Oana-46.jpg",
    "Florin-Oana-47.jpg",
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
