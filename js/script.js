(function () {
    "use strict";

    var forms = document.querySelectorAll(".needs-validation");

    var confirmInput = document.getElementById("reg-confirm");
    var passwordInput = document.getElementById("reg-password");

    function checkPasswordMatch() {
        if (!confirmInput || !passwordInput) {
            return;
        }
        if (confirmInput.value !== passwordInput.value) {
            confirmInput.setCustomValidity("Passwords do not match");
        } else {
            confirmInput.setCustomValidity("");
        }
    }

    if (confirmInput && passwordInput) {
        confirmInput.addEventListener("input", checkPasswordMatch);
        passwordInput.addEventListener("input", checkPasswordMatch);
    }

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
            checkPasswordMatch();
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);

        form.addEventListener("reset", function () {
            form.classList.remove("was-validated");
            if (confirmInput) {
                confirmInput.setCustomValidity("");
            }
        });
    });
})();