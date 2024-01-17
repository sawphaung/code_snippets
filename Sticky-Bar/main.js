const nav = document.querySelector(".sticky-bar");
const topOfNav = nav.offsetTop;

function stickyBar() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("sticky");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickyBar);
