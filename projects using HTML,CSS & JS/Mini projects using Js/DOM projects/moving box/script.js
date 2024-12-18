const box = document.querySelector(".box");
const body = document.body;
let movingHorizontally;
let movingVertically;

window.addEventListener("keydown", (e) => {
  //-> 'limit' the movement of box
  let topLimit = box.offsetTop > body.offsetTop;
  let bottomLimit = body.offsetHeight > box.offsetTop + box.offsetHeight + 10;
  let leftLimit = box.offsetLeft > body.offsetLeft + 5;
  let rightLimit = box.offsetLeft + box.offsetWidth + 10 < body.offsetWidth;

  console.log(e);
  console.log(box.offsetLeft);
  console.log(box.offsetTop);

  movingVertically = box.offsetTop;
  movingHorizontally = box.offsetLeft;

  //-> conditions for 'Arrow Keys'
  if (e.key === "ArrowDown" && bottomLimit) {
    movingVertically += 10;
    box.style.top = movingVertically + "px";
  } else if (e.key === "ArrowUp" && topLimit) {
    movingVertically -= 10;
    box.style.top = movingVertically + "px";
  } else if (e.key === "ArrowLeft" && leftLimit) {
    movingHorizontally -= 10;
    box.style.left = movingHorizontally + "px";
  } else if (e.key === "ArrowRight" && rightLimit) {
    movingHorizontally += 10;
    box.style.left = movingHorizontally + "px";
  }
});
