const inp = document.querySelector("#phone-number");

const getStringWithNumbersOnly = (str) => {
  return [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");
};
const formatString = (str) => {
  const numStr = getStringWithNumbersOnly(str);
  if (numStr.length > 3) {
    return "+(" + numStr.substring(0, 3) + ")-" + numStr.substring(3);
  } else {
    return numStr;
  }
};

//-> event listeners
inp.addEventListener("input", () => {
  inp.value = formatString(inp.value);
  // return inp.value;
});
