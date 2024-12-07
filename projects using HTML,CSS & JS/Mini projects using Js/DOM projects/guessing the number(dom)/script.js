const inp_value = document.getElementById("inp");
const result_text = document.querySelector(".result");
const guess = document.querySelector(".guesses");
const sub_btn = document.querySelector(".submit");
const strt_btn = document.querySelector(".start");

let randomNum;
let value;
let guesses = [];

strt_btn.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 100);
  console.log("game started");
  sub_btn.disabled = false;
  strt_btn.disabled = true;
});

sub_btn.addEventListener("click", () => {
  value = inp_value.value;

  if (value) {
    if (randomNum == value) {
      result_text.innerText = "You got it! Congrats";
      strt_btn.disabled = true;
      sub_btn.disabled = false;
    } else if (randomNum < value) {
      result_text.innerText = "Too High !!!";
    } else {
      result_text.innerText = "Too Low !!!";
    }

    guesses.push(value);
    guess.innerText = `Your guesses: ${guesses.toString()}`;
  } else {
    result_text.innerText = "Enter the value in the input field";
  }
});
