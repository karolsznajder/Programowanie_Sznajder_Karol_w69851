function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(documentg.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            result = "Nieprawidłowy operator"
    }

    alert("Wynik to:" + result)

}

function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(password !== confirmPassword) {
        alert("Hasła są różne.")
        return false;
    }

    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/
    if(!passwordPattern.test(password)) {
        alert("Hasło nie spełnia wymagań.")
    }

    return true;
}