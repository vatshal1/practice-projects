const btn = document.querySelector("button");
const para = document.querySelector("p");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&type=single";

btn.addEventListener("click", joke);

//-> using async/ await
async function joke() {
  para.textContent = `${item.joke}`;
  const response = await fetch(url);
  const data = await response.json();

  para.innerText = `${data.joke}`;
  para.textContent = `${item.joke}`;
}
