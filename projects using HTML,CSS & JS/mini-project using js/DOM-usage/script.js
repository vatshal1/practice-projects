frm = document.querySelector("form");
frm.addEventListener("submit", function handleSubmit(e) {
  e.preventDefault();
  var username = document.getElementById("user");
  var password = document.getElementById("pass");
  console.log("Username:", username.value);
  console.log("Password:", password.value);
  console.log("submitted the details");
});
