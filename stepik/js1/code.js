const firstNameInput = document.querySelector(".input__first-name");
const lastNameInput = document.querySelector(".input__last-name");
const buttonSend = document.querySelector(".button__send");
const result = document.querySelector(".result");

buttonSend.addEventListener("click", function () {
  result.textContent = `Ответ: Здравствуйте, ${firstNameInput.value} ${lastNameInput.value}!`;
});
