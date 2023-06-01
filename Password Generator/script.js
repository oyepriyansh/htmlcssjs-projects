const passwordInput = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

function generatePassword() {
    const length = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
    let password = "";
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumberOrSymbol = false;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        const randomChar = charset[randomIndex];
        if (!hasLowercase && /[a-z]/.test(randomChar)) {
            password += randomChar.toLowerCase();
            hasLowercase = true;
        } else if (!hasUppercase && /[A-Z]/.test(randomChar)) {
            password += randomChar.toUpperCase();
            hasUppercase = true;
        } else if (!hasNumberOrSymbol && /[0-9!@#$%^&*()_+\-=]/.test(randomChar)) {
            password += randomChar;
            hasNumberOrSymbol = true;
        } else {
            password += randomChar;
        }
    }

    if (!hasLowercase) {
        // if there is no lowercase letter, replace a random character with a lowercase letter
        const index = Math.floor(Math.random() * length);
        password = password.slice(0, index) + "a" + password.slice(index + 1);
        hasLowercase = true;
    }

    if (!hasUppercase) {
        // if there is no uppercase letter, replace a random character with an uppercase letter
        const index = Math.floor(Math.random() * length);
        password = password.slice(0, index) + "A" + password.slice(index + 1);
        hasUppercase = true;
    }

    if (!hasNumberOrSymbol) {
        // if there is no number or symbol, replace a random character with a number or symbol
        const index = Math.floor(Math.random() * length);
        password = password.slice(0, index) + "0" + password.slice(index + 1);
        hasNumberOrSymbol = true;
    }

    return password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
}

generateButton.addEventListener("click", () => {
    const password = generatePassword();
    passwordInput.value = password;
    copyButton.classList.remove("hidden");
});

copyButton.addEventListener("click", () => {
    copyPassword();
});
