const bill_inp = document.getElementById("inp");
const custom_tip = document.getElementById("inp_tip");
const btns_container = document.querySelector(".buttons");
const people_count = document.getElementById("people_count");
const generate_btn = document.querySelector(".gnrt-bill");

//-> 'result' box selectors

const tipAmount = document.querySelector(".amount");
const total = document.querySelector(".total");
const eachAmount = document.querySelector(".per-person");
const reset_btn = document.querySelector(".result button");

let tipPercentage = 0;

//->  functions

function reset() {
  tipPercentage = 0;
  bill_inp.value = "";
  custom_tip.value = "";
  people_count.value = "";
  tipAmount.innerText = "";
  total.innerText = "";
  eachAmount.innerText = "";
  [...btns_container.children].forEach((tip) => {
    tip.classList.remove("selected");
  });
  reset_btn.disabled = true;
  generate_btn.disabled = true;
  custom_tip.disabled = true;
  people_count.disabled = true;
  btns_container.classList.add("disabled");
}

//-> event listeners

//! Bill Amount
bill_inp.addEventListener("input", () => {
  if (bill_inp.value) {
    custom_tip.disabled = false;
    people_count.disabled = false;
    btns_container.classList.remove("disabled");
  } else {
    custom_tip.disabled = true;
    people_count.disabled = true;
    btns_container.classList.add("disabled");
  }
});

//! generate button enabling
people_count.addEventListener("input", () => {
  if (people_count.value && tipPercentage) {
    generate_btn.disabled = false;
  } else {
    generate_btn.disabled = true;
  }
});

//! Generate Button
generate_btn.addEventListener("click", () => {
  let bill = parseInt(bill_inp.value);
  let people = parseInt(people_count.value);

  //. calculation
  let tip_Amount = (bill * tipPercentage) / 100;
  let totalAmount = bill + tip_Amount;

  if (tip_Amount < 0 || bill < 0 || people <= 0) {
    reset();
    alert("Enter valid value in input fields");
  } else {
    tipAmount.innerText = `$${tip_Amount.toFixed(2)}`;
    total.innerText = `$${totalAmount.toFixed(2)}`;
    eachAmount.innerText = `$${(totalAmount / people).toFixed(2)}`;

    reset_btn.disabled = false;
    tipPercentage = 0;
  }
});

//! Reset Button
reset_btn.addEventListener("click", reset);

//! buttons parent
btns_container.addEventListener("click", (e) => {
  if (btns_container.classList.contains("disabled")) return;
  //. when we click on buttons rather than empty space.......
  if (e.target !== btns_container) {
    //. from buttons, 'selected' class removed when we select any button.....
    [...btns_container.children].forEach((tip) => {
      tip.classList.remove("selected");
    });
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText);
    custom_tip.value = "";

    //. enabling generate button
    if (people_count.value && tipPercentage) {
      generate_btn.disabled = false;
    } else {
      generate_btn.disabled = true;
    }
  }
});

//! custom_tip
custom_tip.addEventListener("input", () => {
  tipPercentage = parseInt(custom_tip.value);

  [...btns_container.children].forEach((tip) => {
    tip.classList.remove("selected");
  });

  //. enabling generate button
  if (people_count.value && tipPercentage) {
    generate_btn.disabled = false;
  } else {
    generate_btn.disabled = true;
  }
});
