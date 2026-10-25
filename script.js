const accounts = {
    thea: {
        password: "122906",
        name: "My Love"
    },
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (
        accounts[username] &&
        accounts[username].password === password
    ) {
        sessionStorage.setItem("loveName", accounts[username].name);
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Wrong username or password. 💔";
        error.style.display = "block";
    }
});
