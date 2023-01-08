function authenticate(email, password) {
    if (email = "exists") {
        if (password = "matches email") {
            // set localStorage { user: 'email' }
            return "login"; // @TODO handle login
        }
    
        return "wrong email or password" // @TODO set form error
    }

    return "email nie znajduje się w bazie" // @TODO handle redirect to register
}

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log (event);
    const userEmail = event.target.userEmail.value;
    const password = event.target.password.value;

    authenticate(userEmail, password);
})