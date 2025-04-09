const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > 1200) {
    nav.classList.remove("active");
    nav.classList.add("black");
  } else if (window.scrollY > nav.offsetHeight + 500) {
    nav.classList.remove("black");
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
    nav.classList.remove("black");
  }
}



 