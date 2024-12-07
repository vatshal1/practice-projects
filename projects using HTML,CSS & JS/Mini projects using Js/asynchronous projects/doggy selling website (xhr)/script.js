const image = document.querySelector("img");
const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.responseType = "json";

  xhr.addEventListener("load", getDog);

  xhr.open("Get", "https://dog.ceo/api/breeds/image/random");
  xhr.send();

  function getDog() {
    console.log(xhr);
    image.src = xhr.response.message;
  }
});
