const buttons = document.querySelectorAll(".card-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("cancel")) {
      this.classList.remove("cancel");
      this.textContent = "Add item";
      this.style.backgroundColor = "blue";
    } else {
      this.classList.add("cancel");
      this.textContent = "Cancel item";
      this.style.backgroundColor = "red";
    }
  });
});
