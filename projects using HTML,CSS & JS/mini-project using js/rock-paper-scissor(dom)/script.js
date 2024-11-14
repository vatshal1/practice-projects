const emojis = ["👊", "✋", "✌️"];

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const me = document.querySelector(".me");
const computer = document.querySelector(".computer");

//-> comparison
const meScore = document.querySelector(".meScore");
const computerScore = document.querySelector(".computerScore");
let result = document.querySelector(".message");

//-> comparing scores
function comparison() {
  let myEmoji = me.innerText;
  let computerEmoji = computer.innerText;
  let ms = parseInt(meScore.innerText);
  let cs = parseInt(computerScore.innerText);

  // prettier-ignore
  if (myEmoji == emojis[0]) {
    if (computerEmoji == emojis[1]) {
      result.innerText = "You Lose";
    } else if (computerEmoji == emojis[2]) {
      result.innerText = "You Win";
    } else {
      result.innerText = "DRAW";
    }
  } 
  else if (myEmoji == emojis[1]) {
    if (computerEmoji == emojis[2]) {
      result.innerText = "You Lose";
    } else if (computerEmoji == emojis[0]) {
      result.innerText = "You Win";
    } else {
      result.innerText = "DRAW";
    }
  } 
  else if (myEmoji == emojis[2]) {
    if (computerEmoji == emojis[1]) {
      result.innerText = "You Win";
    } else if (computerEmoji == emojis[0]) {
      result.innerText = "You Lose";
    } else {
      result.innerText = "DRAW";
    }
  }

  //-> score board
  if (result.innerText == "You Win") {
    meScore.innerText = ++ms;
  } else if (result.innerText == "You Lose") {
    computerScore.innerText = ++cs;
  }
}

//-> random emojis generator
function random() {
  let i = Math.floor(Math.random() * 3);
  computer.innerText = emojis[i];
}

//-> animation
function animation(index) {
  result.innerText = "Wait....";

  me.innerText = "🤜";
  computer.innerText = "🤛";
  me.classList.add("shakeUserHands");
  computer.classList.add("shakeComputerHands");

  setTimeout(() => {
    me.classList.remove("shakeUserHands");
    computer.classList.remove("shakeComputerHands");
    me.innerText = emojis[index];
    random();
    comparison();
  }, 1000);
}

//-> Event listener on buttons.
rockBtn.addEventListener("click", () => {
  const index = 0;
  animation(index);
});

paperBtn.addEventListener("click", () => {
  const index = 1;
  animation(index);
});

scissorBtn.addEventListener("click", () => {
  const index = 2;
  animation(index);
});
