// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

});

const Hamburger = document.getElementById("hamburger");
const Sliders = document.getElementsByClassName("slider")[0]; // Notice 'Sliders' (plural) since this is a collection
const Cross = document.getElementById("cross");
Hamburger.addEventListener("click", function () {
  console.log("click");

  Sliders.classList.toggle("active");
});

Cross.addEventListener("click", function () {
  Sliders.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const images = scroller.children;
  for (let i = 0; i < images.length; i++) {
    const clone = images[i].cloneNode(true);
    scroller.appendChild(clone);
  }
});
