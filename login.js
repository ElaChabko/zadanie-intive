if (localStorage.getItem(userEmail)){
    localStorage.setItem(userEmail, password);
    localStorage.setItem('loggedIn', true);
  };

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log (event);
    const userEmail = event.target.userEmail.value;
    const password = event.target.password.value;

    authenticate(userEmail, password);
})

function authenticate(userEmail, password) {
    if (!localStorage.getItem(userEmail))
    return alert("Email nie znajduje się w bazie. Zarejestruj się"); 

    console.log(userEmail,password);
    if (localStorage.getItem(userEmail) === password){
        localStorage.setItem('loggedIn', true);
        window.location = 'index.html?page=logOn';
      } 
            
        return "Błędny e-mail lub hasło";
    }