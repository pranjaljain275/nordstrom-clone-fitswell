// trending slider
let count = 0;

function goPrev() {
  count--;
  slideshow(count);
}
function goNext() {
  count++;
  slideshow(count);
}

function slideshow(num) {
  let slides = document.querySelectorAll("#trending #slides");
  console.log(slides);

  if (num < 0) {
    count = slides.length - 1;
    num = slides.length - 1;
  }
  if (num > slides.length - 1) {
    count = 0;
    num = 0;
  }

  slides.forEach((elem) => {
    elem.style.display = "none";
  });
  slides[num].style.display = "block";
}
slideshow(count);

// popup on load
let popupScreen = document.querySelector(".popup-screen");
let popupBox = document.querySelector(".popup-box");
let closeBtn = document.querySelector(".close");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000);
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.cookie = "WebsiteName=FITsWELL; max-age=" + 24 * 60 * 60;
});

const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if (WebsiteCookie != -1) {
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
} else {
  popupScreen.style.display = "block"; //Show the popup screen if the cookie is expired.
}
