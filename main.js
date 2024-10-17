let navOpen = document.querySelector("#open");
let navClose = document.querySelector("#close");

let tl = gsap.timeline();

let tx = gsap.timeline();

tl.to(".navBar", {
 right: 0
});

tl.from(".navBar h3", {
  scale: 0,
  stagger: 0.2,
  right: -50
});


tx.from(".heding h1",{
  duration:0.5,
  scale:0,
  x:-30
})

tx.from(".heding h3",{
  duration:0.5,
  scale:0,
  x:-30
})

tx.from(".hero img",{
  duration:0.3,
  scale:0,
  x:30,
})

tl.pause();

navOpen.addEventListener("click", () => {
  tl.play();
});

navClose.addEventListener("click", () => {
  tl.reverse();
});

//* Dark Mode & Light Mode with Local Storage */
let button = document.querySelector(".button");
let checkbox = document.querySelector("#check");
let body = document.querySelector("body");

// Function to set theme
function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add("light");
    navOpen.setAttribute('fill', "#000"); // Set icon color for light mode
    checkbox.checked = true;
  } else {
    body.classList.remove("light");
    navOpen.setAttribute('fill', "#fff"); // Set icon color for dark mode
    checkbox.checked = false;
  }
}

// Check local storage for theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || 'dark'; // Default to dark mode
  setTheme(savedTheme);
});

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    setTheme('light');
    localStorage.setItem("theme", "light");
  } else {
    setTheme('dark');
    localStorage.setItem("theme", "dark");
  }
});