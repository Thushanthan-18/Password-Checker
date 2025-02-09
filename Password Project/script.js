function checkPassword() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strengthText");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    if (strength === 0) {
        strengthText.innerHTML = "Strength: Weak ❌";
        strengthText.className = "strength weak";
    } else if (strength <= 2) {
        strengthText.innerHTML = "Strength: Medium ⚠️";
        strengthText.className = "strength medium";
    } else {
        strengthText.innerHTML = "Strength: Strong ✅";
        strengthText.className = "strength strong";
    }
}
