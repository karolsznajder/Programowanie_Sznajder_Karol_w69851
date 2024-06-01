function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
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

    alert("Wynik to: " + result)

}

function validateForm() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if(password !== confirmPassword) {
        alert("Hasła nie są zgodne");
        return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if(!passwordPattern.test(password)) {
        alert("At least 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol, symbol allowed --> !@#$%^&*_=+-, Min 8 chars and Max 12 chars")
        return false;
    }

    return true;
}