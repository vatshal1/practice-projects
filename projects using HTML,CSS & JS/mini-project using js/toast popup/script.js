const horizontal = document.getElementById("horizontal");
const vertical = document.getElementById("vertical");
const msg_type = document.getElementById("msg-type");

const cust_inp = document.getElementById("custom-inp");
const slider = document.getElementById("duration");
const btn = document.querySelector(".btn");

const popUp = document.getElementById("popup-container");

btn.addEventListener("click", () => {
  popUpCreate();
  position();
});

function position() {
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
}

function popUpCreate() {
  let div = document.createElement("div");
  div.innerHTML = `${cust_inp.value}`;
  div.classList.add("toast");
  popUp.appendChild(div);

  const cancel = document.createElement("span");
  cancel.innerText = " X";
  div.appendChild(cancel);

  let time = slider.value * 2000;
  setTimeout(() => {
    popUp.removeChild(div);
    console.log("clearing");
  }, time);

  cancel.addEventListener("click", () => {
    popUp.removeChild(div);
  });

  if (msg_type.value === "Success") {
    div.classList.add("success");
  } else if (msg_type.value === "Warning") {
    div.classList.add("warning");
  } else if (msg_type.value === "Error") {
    div.classList.add("error");
  } else if (msg_type.value === "Information") {
    div.classList.add("information");
  } else {
    console.log("NO message type");
  }
}
