const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const usrs = ["admin", "lol", "gg"];
const psw = ["admin", "lol", "gg"];

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "admin" && password === "admin")
    {
        
        location = "/";
    } else
    {
        alert("Please enter a username and password");
        loginErrorMsg.style.opacity = 1;
    }
})