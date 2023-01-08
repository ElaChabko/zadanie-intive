
const mail = document.getElementById("userEmail");
const mailConf = document.getElementById("userEmailConfirmation");
const nick = document.getElementById("nickname");
const pass = document.getElementById("password");

let mailInputTouched = false;


if (mailInputTouched && mailConf != mail) {
  alert("Błędny adres e-mail")
}

const signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault()
  console.log (event)
  const nickname = event.target.nickname.value;
  const userEmail = event.target.userEmail.value;
  const userEmailConfirmation = event.target.userEmailConfirmation.value;
  const password = event.target.password.value;


})

  // muszę zapiąć eventlistener na przycisku subbmit, w funkcji która obsłuzy to na początek możesz sobie zrobić event.preventDeafult - żeby nie przechodził do nowej srtony
  // na początek concol.logo - żeby zobaczyć wartości z formularza,
  // jak je bd mieć to myśl jak zapisać do local storage



