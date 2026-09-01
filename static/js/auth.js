// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

const togglePassword =
    document.getElementById("togglePassword");


const password =
    document.getElementById("password");


if (togglePassword && password) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.textContent =
                    "Hide";

            } else {

                password.type = "password";

                togglePassword.textContent =
                    "Show";

            }

        }
    );

}


// ==========================================
// LOGIN
// ==========================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById("email").value.trim();


            const passwordValue =
                document.getElementById("password").value;


            const message =
                document.getElementById("loginMessage");


            // Basic frontend validation

            if (!email || !passwordValue) {

                message.textContent =
                    "Please enter email and password.";

                message.className =
                    "message error";

                return;

            }


            // Demo login

            message.textContent =
                "Login successful!";

            message.className =
                "message success";


            /*
                FUTURE BACKEND:

                fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: passwordValue
                    })
                })
            */


            // Demo ke liye dashboard open

            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 1000);

        }
    );

}


// ==========================================
// REGISTER
// ==========================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            const message =
                document.getElementById(
                    "registerMessage"
                );


            // Password match check

            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                message.className =
                    "message error";

                return;

            }


            // Password length

            if (password.length < 8) {

                message.textContent =
                    "Password must contain at least 8 characters.";

                message.className =
                    "message error";

                return;

            }


            // Demo success

            message.textContent =
                "Account created successfully!";

            message.className =
                "message success";


            /*
                FUTURE BACKEND:

                Send name, email and password
                to backend API.

                Password should NEVER be
                stored directly in frontend.
            */


            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1200);

        }
    );

}


// ==========================================
// FORGOT PASSWORD
// ==========================================

const forgotForm =
    document.getElementById("forgotForm");


if (forgotForm) {

    forgotForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "forgotEmail"
                ).value.trim();


            const message =
                document.getElementById(
                    "forgotMessage"
                );


            if (!email) {

                message.textContent =
                    "Please enter your email.";

                message.className =
                    "message error";

                return;

            }


            message.textContent =
                "Reset link request submitted.";

            message.className =
                "message success";


            /*
                FUTURE BACKEND:

                Backend will send
                password reset email.
            */

        }
    );

}