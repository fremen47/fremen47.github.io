//Hamburger menu
const menu = document.querySelector(".hamburger_menu");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close_hamb");
const open = document.querySelector(".open_hamb");
const header = document.getElementById('header');
const main = document.querySelector("main");

function toggleMenu() {
  if (menu.classList.contains("show_menu")) {
    menu.classList.remove("show_menu");
    header.classList.remove("scrolled");
    main.style.opacity = "1";
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.classList.add("show_menu");
    header.classList.add("scrolled");
    main.style.opacity = "0.3";
    close.style.display = "block";
    open.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show_menu")) {
      menu.classList.remove("show_menu");
      close.style.display = "none";
      open.style.display = "block";
    }
  });
});

const darkmodeBtn = document.getElementById("darkmode_hamburger");
if (darkmodeBtn) {
  darkmodeBtn.addEventListener("click", () => {
    const originalBtn = document.getElementById("mode_switch");
    if (originalBtn) originalBtn.click();
    
    if (menu.classList.contains("show_menu")) {
      menu.classList.remove("show_menu");
      close.style.display = "none";
      open.style.display = "block";
    }
  });
}