const box = document.querySelector(".box");
const checkBoxes = document.querySelectorAll(".custom-checkbox");
const redMsg = document.querySelector(".red-msg");

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    checkbox.parentElement.classList.toggle("completed");
  });
});
