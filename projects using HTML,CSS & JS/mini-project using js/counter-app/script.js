const counter = document.querySelector(".value");
const btn1 = document.querySelector(".btn-increment");
const btn2 = document.querySelector(".btn-decrement");
const changeBy = document.querySelector("#change-by");
const reset = document.querySelector(".reset");

//* event listener for increment-button.......
btn1.addEventListener("click", () => {
  let value = parseInt(counter.innerText);
  counter.innerText = value + parseInt(changeBy.value);
});

//* event listener for decrement-button......
btn2.addEventListener("click", () => {
  let value = parseInt(counter.innerText);
  counter.innerText = value - parseInt(changeBy.value);
});

//* event listener for recent button......
reset.addEventListener("click", () => {
  counter.innerText = "0";
});
