document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        document.getElementById("loginStatus").textContent = "Login successful!";
    } else {
        document.getElementById("loginStatus").textContent = "Login failed. Please check your credentials.";
    }
});
