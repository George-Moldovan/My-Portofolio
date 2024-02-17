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
    "Sergiu-Mihaela-1.jpg",
    "Sergiu-Mihaela-2.jpg",
    "Sergiu-Mihaela-3.jpg",
    "Sergiu-Mihaela-4.jpg",
    "Sergiu-Mihaela-5.jpg",
    "Sergiu-Mihaela-6.jpg",
    "Sergiu-Mihaela-7.jpg",
    "Sergiu-Mihaela-8.jpg",
    "Sergiu-Mihaela-9.jpg",
    "Sergiu-Mihaela-10.jpg",
    "Sergiu-Mihaela-11.jpg",
    "Sergiu-Mihaela-12.jpg",
    "Sergiu-Mihaela-13.jpg",
    "Sergiu-Mihaela-14.jpg",
    "Sergiu-Mihaela-15.jpg",
    "Sergiu-Mihaela-16.jpg",
    "Sergiu-Mihaela-17.jpg",
    "Sergiu-Mihaela-18.jpg",
    "Sergiu-Mihaela-19.jpg",
    "Sergiu-Mihaela-20.jpg",
    "Sergiu-Mihaela-21.jpg",
    "Sergiu-Mihaela-22.jpg",
    "Sergiu-Mihaela-23.jpg",
    "Sergiu-Mihaela-24.jpg",
    "Sergiu-Mihaela-25.jpg",
    "Sergiu-Mihaela-26.jpg",
    "Sergiu-Mihaela-27.jpg",
    "Sergiu-Mihaela-28.jpg",
    "Sergiu-Mihaela-29.jpg",
    "Sergiu-Mihaela-30.jpg",
    "Sergiu-Mihaela-31.jpg",
    "Sergiu-Mihaela-32.jpg",
    "Sergiu-Mihaela-33.jpg",
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
