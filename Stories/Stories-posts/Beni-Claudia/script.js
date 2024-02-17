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
    "Beni-Claudia-1.jpg",
    "Beni-Claudia-2.jpg",
    "Beni-Claudia-3.jpg",
    "Beni-Claudia-4.jpg",
    "Beni-Claudia-5.jpg",
    "Beni-Claudia-6.jpg",
    "Beni-Claudia-7.jpg",
    "Beni-Claudia-8.jpg",
    "Beni-Claudia-9.jpg",
    "Beni-Claudia-10.jpg",
    "Beni-Claudia-11.jpg",
    "Beni-Claudia-12.jpg",
    "Beni-Claudia-13.jpg",
    "Beni-Claudia-14.jpg",
    "Beni-Claudia-15.jpg",
    "Beni-Claudia-16.jpg",
    "Beni-Claudia-17.jpg",
    "Beni-Claudia-18.jpg",
    "Beni-Claudia-19.jpg",
    "Beni-Claudia-20.jpg",
    "Beni-Claudia-21.jpg",
    "Beni-Claudia-22.jpg",
    "Beni-Claudia-23.jpg",
    "Beni-Claudia-24.jpg",
    "Beni-Claudia-25.jpg",
    "Beni-Claudia-26.jpg",
    "Beni-Claudia-27.jpg",
    "Beni-Claudia-28.jpg",
    "Beni-Claudia-29.jpg",
    "Beni-Claudia-30.jpg",
    "Beni-Claudia-31.jpg",
    "Beni-Claudia-32.jpg",
    "Beni-Claudia-33.jpg",
    "Beni-Claudia-34.jpg",
    "Beni-Claudia-35.jpg",
    "Beni-Claudia-36.jpg",
    "Beni-Claudia-37.jpg",
    "Beni-Claudia-38.jpg",
    "Beni-Claudia-39.jpg",
    "Beni-Claudia-40.jpg",
    "Beni-Claudia-41.jpg",
    "Beni-Claudia-42.jpg",
    "Beni-Claudia-43.jpg",
    "Beni-Claudia-44.jpg",
    "Beni-Claudia-45.jpg",
    "Beni-Claudia-46.jpg",
    "Beni-Claudia-47.jpg",
    "Beni-Claudia-48.jpg",
    "Beni-Claudia-49.jpg",
    "Beni-Claudia-50.jpg",
    "Beni-Claudia-51.jpg",
    "Beni-Claudia-52.jpg",
    "Beni-Claudia-53.jpg",
    "Beni-Claudia-54.jpg",
    "Beni-Claudia-55.jpg",
    "Beni-Claudia-56.jpg",
    "Beni-Claudia-57.jpg",
    "Beni-Claudia-58.jpg",
    "Beni-Claudia-59.jpg",
    "Beni-Claudia-60.jpg",
    "Beni-Claudia-61.jpg",
    "Beni-Claudia-62.jpg",
    "Beni-Claudia-63.jpg",
    "Beni-Claudia-64.jpg",
    "Beni-Claudia-65.jpg",
    "Beni-Claudia-66.jpg",
    "Beni-Claudia-67.jpg",
    "Beni-Claudia-68.jpg",
    "Beni-Claudia-69.jpg",
    "Beni-Claudia-70.jpg",
    "Beni-Claudia-71.jpg",
    "Beni-Claudia-72.jpg",
    "Beni-Claudia-73.jpg",
    "Beni-Claudia-74.jpg",
    "Beni-Claudia-75.jpg",
    "Beni-Claudia-76.jpg",
    "Beni-Claudia-77.jpg",
    "Beni-Claudia-78.jpg",
    "Beni-Claudia-79.jpg",
    "Beni-Claudia-80.jpg",
    "Beni-Claudia-81.jpg",
    "Beni-Claudia-82.jpg",
    "Beni-Claudia-83.jpg",
    "Beni-Claudia-84.jpg",
    "Beni-Claudia-85.jpg",
    "Beni-Claudia-86.jpg",
    "Beni-Claudia-87.jpg",
    "Beni-Claudia-88.jpg",
    "Beni-Claudia-89.jpg",
    "Beni-Claudia-90.jpg",
    "Beni-Claudia-91.jpg",
    "Beni-Claudia-92.jpg",
    "Beni-Claudia-93.jpg",
    "Beni-Claudia-94.jpg",
    "Beni-Claudia-95.jpg",
    "Beni-Claudia-96.jpg",
    "Beni-Claudia-97.jpg",
    "Beni-Claudia-98.jpg",
    "Beni-Claudia-99.jpg",
    "Beni-Claudia-100.jpg",
    "Beni-Claudia-101.jpg",
    "Beni-Claudia-102.jpg",
    "Beni-Claudia-103.jpg",
    "Beni-Claudia-104.jpg",
    "Beni-Claudia-105.jpg",
    "Beni-Claudia-106.jpg",
    "Beni-Claudia-107.jpg",
    "Beni-Claudia-108.jpg",
    "Beni-Claudia-109.jpg",
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
