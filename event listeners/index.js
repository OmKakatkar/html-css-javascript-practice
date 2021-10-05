const userInput = document.querySelector("#user-input");
const output = document.querySelector("#output");

userInput.addEventListener("change", inputChangeHandler);

function inputChangeHandler() {
  output.innerText = userInput.value;
}
