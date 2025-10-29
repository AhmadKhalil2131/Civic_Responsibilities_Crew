// Simple JS Example
console.log("CRC Website Loaded");

// Example: toggle a menu (if mobile)
const menuButton = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuButton?.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
