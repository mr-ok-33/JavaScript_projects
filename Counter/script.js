const value = document.getElementById("value");
const decrease = document.querySelector(".dec");
const increase = document.querySelector(".inc");
const reset = document.querySelector(".res");

let currentValue = 0;

decrease.addEventListener("click", () => {
  currentValue--;
  value.textContent = currentValue;
});

increase.addEventListener("click", () => {
  currentValue++;
  value.textContent = currentValue;
});

reset.addEventListener("click", () => {
  currentValue = 0;
  value.textContent = currentValue;
});


