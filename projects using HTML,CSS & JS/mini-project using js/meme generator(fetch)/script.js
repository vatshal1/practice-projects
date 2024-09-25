const btn = document.querySelector(".meme-btn");
const img = document.querySelector("img");
let author = document.querySelector(".credit");
let title = document.querySelector(".title");

btn.addEventListener("click", () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      img.src = data.url;
      title.innerText = data.title;
      author.innerText = `meme author -> ${data.author}`;
    });
});
