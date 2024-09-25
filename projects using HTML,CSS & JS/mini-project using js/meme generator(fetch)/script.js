const btn = document.querySelector(".meme-btn");
const img = document.querySelector("img");
let author_name = document.querySelector(".credit");
let title_name = document.querySelector(".title");

btn.addEventListener("click", getMeme);

function getMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      img.src = url;
      title_name.innerText = title;
      author_name.innerText = `meme author -> ${author}`;
    });
}

getMeme();
