const horizontal = document.getElementById("horizontal");
const vertical = document.getElementById("vertical");
const msg_type = document.getElementById("msg-type");

const cust_inp = document.getElementById("custom-inp");
const slider = document.getElementById("duration");
const btn = document.querySelector(".btn");

const popUp = document.getElementById("popup-container");

function successMsg() {
  let div = document.createElement("div");
  div.innerHTML = `✓ &nbsp; ${cust_inp.value} &nbsp;<button>X</button>`;
  div.classList.add("success-msg");
  popUp.appendChild(div);
}

//-> event listeners
btn.addEventListener("click", () => {
  successMsg();
  if (horizontal.value == "Left") {
    popUp.classList.remove("right");
    popUp.classList.add("left");
  } else {
    popUp.classList.remove("left");
    popUp.classList.add("right");
  }

  if (vertical.value == "Top") {
    popUp.classList.remove("bottom");
    popUp.classList.add("top");
  } else {
    popUp.classList.remove("top");
    popUp.classList.add("bottom");
  }
});
