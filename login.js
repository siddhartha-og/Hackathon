function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Demo credentials
    const demoUser = "admin";
    const demoPass = "1234";

    if (username === demoUser && password === demoPass) {
        window.location.href = "index.html";
    } else {
        error.innerText = "Invalid username or password!";
    }
}
