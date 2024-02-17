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
    "Hugo-Ema-1.jpg",
    "Hugo-Ema-2.jpg",
    "Hugo-Ema-3.jpg",
    "Hugo-Ema-4.jpg",
    "Hugo-Ema-5.jpg",
    "Hugo-Ema-6.jpg",
    "Hugo-Ema-7.jpg",
    "Hugo-Ema-8.jpg",
    "Hugo-Ema-9.jpg",
    "Hugo-Ema-10.jpg",
    "Hugo-Ema-11.jpg",
    "Hugo-Ema-12.jpg",
    "Hugo-Ema-13.jpg",
    "Hugo-Ema-14.jpg",
    "Hugo-Ema-15.jpg",
    "Hugo-Ema-16.jpg",
    "Hugo-Ema-17.jpg",
    "Hugo-Ema-18.jpg",
    "Hugo-Ema-19.jpg",
    "Hugo-Ema-20.jpg",
    "Hugo-Ema-21.jpg",
    "Hugo-Ema-22.jpg",
    "Hugo-Ema-23.jpg",
    "Hugo-Ema-24.jpg",
    "Hugo-Ema-25.jpg",
    "Hugo-Ema-26.jpg",
    "Hugo-Ema-27.jpg",
    "Hugo-Ema-28.jpg",
    "Hugo-Ema-29.jpg",
    "Hugo-Ema-30.jpg",
    "Hugo-Ema-31.jpg",
    "Hugo-Ema-32.jpg",
    "Hugo-Ema-33.jpg",
    "Hugo-Ema-34.jpg",
    "Hugo-Ema-35.jpg",
    "Hugo-Ema-36.jpg",
    "Hugo-Ema-37.jpg",
    "Hugo-Ema-38.jpg",
    "Hugo-Ema-39.jpg",
    "Hugo-Ema-40.jpg",
    "Hugo-Ema-41.jpg",
    "Hugo-Ema-42.jpg",
    "Hugo-Ema-43.jpg",
    "Hugo-Ema-44.jpg",
    "Hugo-Ema-45.jpg",
    "Hugo-Ema-46.jpg",
    "Hugo-Ema-47.jpg",
    "Hugo-Ema-48.jpg",
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
