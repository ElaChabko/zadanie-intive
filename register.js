// let mailInputTouched = false;

const signupForms = document.querySelector("#signupForm");

signupForms.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const nickname = event.target.nickname.value;
  const userEmail = event.target.userEmail.value;
  const userEmailConfirmation = event.target.userEmailConfirmation.value;
  const password = event.target.password.value;

  // if (mailInputTouched && userEmailConfirmation != userEmail) {
  //   alert("Błędny adres e-mail")
  // };

  if (userEmail != userEmailConfirmation) {
    alert("Błędny adres e-mail")
  };

  if (!localStorage.getItem(userEmail)) {
    localStorage.setItem(userEmail, password);
    localStorage.setItem('loggedIn', true);
    window.location = 'index.html?page=logOn';
  };
 
})





