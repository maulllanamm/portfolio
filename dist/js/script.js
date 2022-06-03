const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
