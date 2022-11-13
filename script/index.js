// dropdown
let toggle = document.querySelectorAll(".toggle");

for(let i=0; i<toggle.length; i++) {
  toggle[i].addEventListener("click", ()=> {
    toggle[i].classList.toggle("active");
    let main = toggle[i].nextElementSibling;
    if(main.style.display == "flex") {
      main.style.display = "none";
    } else {
      main.style.display = "flex";
    }
  })
}