// NavBar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);
navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

// food menu
const tabs = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll(".item-wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach((e) => {
  e.addEventListener("click", () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");

    const tabval = e.getAttribute("data-tab");

    all.forEach((e) => {
      e.style.display = "none";
    });

    if (tabval === "food") {
      foods.forEach((e) => {
        e.style.display = "block";
      });
    } else if (tabval === "snack") {
      snacks.forEach((e) => {
        e.style.display = "block";
      });
    } else if (tabval === "beverage") {
      beverages.forEach((e) => {
        e.style.display = "block";
      });
    } else {
      all.forEach((e) => {
        e.style.display = "block";
      });
    }
  });
});

// Dark and light mode button
const html = document.querySelector("html");
const darkBtn = document.getElementById("theme-toggle");
const lightMode= ()=> {
  html.classList.remove("dark");
  darkBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
function darkMode() {
  html.classList.add("dark");
  darkBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

if (localStorage.getItem("mode") == "dark") {
    darkMode();
  } else{
    lightMode();
  }
darkBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else{
    lightMode();
  }
});



// scroll button
const scroll = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 250) {
    scroll.classList.remove("-bottom-1/2");
    scroll.classList.add("bottom-4");
  } else {
    scroll.classList.add("-bottom-1/2");
    scroll.classList.remove("bottom-4");
  }
});
