const inp = document.querySelector(".inp");
const text = document.getElementsByClassName("text");

//-> functions

//! it 'capitalize' first letter of the word
function capitalize(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(str) {
  const lowerCaseString = str.toLowerCase(); //! lowerCase for 1st charachter
  let wordsArray = lowerCaseString.split(" "); //! converting into array for other operations

  //! passing every 'word' of 'wordArray' into 'capitalize' function except '1st word'.
  let modifiedString = wordsArray.map((word, index) => {
    if (index == 0) return word;
    return capitalize(word);
  });

  //! join all 'words' of 'wordsArray' which converts into 'string'.
  return modifiedString.join("");
}

function toPascalCase(str) {
  let lowerCaseString = str.toLowerCase();
  let wordsArray = lowerCaseString.split(" ");
  let modifiedString = wordsArray.map((word) => {
    return capitalize(word);
  });

  return modifiedString.join("");
}

function stringTransformer() {
  let value = inp.value;
  text[0].innerText = value.toLowerCase();
  text[1].innerText = value.toUpperCase();
  text[2].innerText = toCamelCase(value);
  text[3].innerText = toPascalCase(value);
  text[4].innerText = value.trim().replaceAll(" ", "_");
  text[5].innerText = value.trim().replaceAll(" ", "-");
  text[6].innerText = value.replaceAll(" ", "").trim();
}

//-> Event listeners
inp.addEventListener("input", (e) => {
  // let value = e.target.value;
  stringTransformer();
});

stringTransformer();
