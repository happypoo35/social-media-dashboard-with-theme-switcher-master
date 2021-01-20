const container = document.querySelector(".container");
const btn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  container.classList.toggle("light");
});
