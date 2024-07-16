document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("username");
        const username = document.getElementById("username").value.trim();
        document.getElementById("email");
        const email = document.getElementById("email").value.trim();
        document.getElementById("password");
        const password = document.getElementById("password").value.trim();
        let isValid = true;
        let messages = [];
        if (username.length < 3) {
            isValid = false;
            messages.push("Username error: Input username is too short!");
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            isValid = false;
            messages.push("Email error: Email is incorrect!");
        }
        if (password.length < 8) {
            isValid = false;
            messages.push("Password error: Your Password is too short!");
        }
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});