const toggleNav = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav__links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Burger animations

    burgerMenu.classList.toggle("toggle__links");
  });
};

toggleNav();
