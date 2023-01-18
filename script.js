
const params = (new URL(document.location)).searchParams;

let activePage = params.get("page") || "home";
console.log(activePage);
// get page paremeter
// if page parameter exists overwrite activePage

const registerLink = document.querySelector("#registerLink");
const loginLink = document.querySelector("#loginLink");
const homeContent = document.querySelector("#homeContent");
const signupForm = document.querySelector("#signupForm");
const logOn = document.querySelector("#logOn");
const logOutLink = document.querySelector("#logOutLink");

if(activePage === "home") {
    registerLink.style.display = '';
    loginLink.style.display = '';
    homeContent.style.display = '';
    signupForm.style.display = 'none';
    loginForm.style.display = 'none';
    logOn.style.display = 'none';
    logOutLink.style.display = 'none';
}

if(activePage === "register") {
    registerLink.style.display = 'none';
    loginLink.style.display = '';
    homeContent.style.display = 'none';
    signupForm.style.display = '';
    loginForm.style.display = 'none';
    logOn.style.display = 'none';
    logOutLink.style.display = 'none';

}

if(activePage === "login") {
    registerLink.style.display = '';
    loginLink.style.display = 'none';
    homeContent.style.display = 'none';
    signupForm.style.display = 'none';
    loginForm.style.display = '';
    logOn.style.display = 'none';
    logOutLink.style.display = 'none';

}

if(activePage === "logOn") {
    registerLink.style.display = 'none';
    loginLink.style.display = 'none';
    homeContent.style.display = 'none';
    signupForm.style.display = 'none';
    loginForm.style.display = 'none';
    logOn.style.display = '';
    logOutLink.style.display = '';

}

registerLink.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    
    activePage = "register";
    // set url
    location.href = "index.html?page=register";

})

loginLink.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    
    activePage = "login";
    // set url
    location.href = "index.html?page=login";

})

logOn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    
    activePage = "logOn";
    // set url
    location.href = "index.html?page=logOn";

})

logOutLink.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    localStorage.removeItem('loggedIn');
    activePage = "home";
    // set url
    location.href = "index.html";

})