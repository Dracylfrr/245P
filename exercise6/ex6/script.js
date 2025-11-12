let slideContainer = document.querySelector(".slide__container");
let images = document.querySelectorAll(".slide__container img");
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");

let counter = 1;
let imgSize = images[0].clientWidth;

// Set initial position
slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";

// Next Button
nextButton.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  counter++;
  slideContainer.style.transition = "0.25s ease-in-out";
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});

// Previous Button
prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slideContainer.style.transition = "0.25s ease-in-out";
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});

// Transition handling for looping
slideContainer.addEventListener("transitionend", () => {
  if (images[counter].id === "firstClone") {
    slideContainer.style.transition = "none";
    counter = 1;
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
  }

  if (images[counter].id === "lastClone") {
    slideContainer.style.transition = "none";
    counter = images.length - 2;
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
  }
});
