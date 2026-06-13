//Simple scroll js that adds class scroll to stick header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader_container");
  if (!loader) return;

  loader.style.transition = "opacity 1s ease-out";
  loader.style.opacity = "0";

  loader.addEventListener("transitionend", function () {
    loader.remove();
  });
});