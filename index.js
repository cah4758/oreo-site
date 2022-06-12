const luggBtn = document.querySelector("#luggage");
const backBtn = document.querySelector(".back-btn");
const sideEl = document.querySelector(".sidebar");

luggBtn.addEventListener("click", () => {
  sideEl.style.transform = "translateX(0)";
});
backBtn.addEventListener("click", () => {
  sideEl.style.transform = "translateX(-100%)";
});
