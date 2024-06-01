function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
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
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Nieprawidłowy operator';
    }

    alert('Wynik to: ' + result);
}

function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Sprawdzenie, czy hasła są zgodne
    if (password !== confirmPassword) {
        alert('Hasła nie są zgodne!');
        return false;
    }

    // Sprawdzenie poziomu trudności hasła
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Hasło musi mieć co najmniej 8 znaków, zawierać przynajmniej jedną cyfrę, jedną małą literę, jedną wielką literę i jeden znak specjalny (@, #, $, %, ^, &, +, =).');
        return false;
    }

    return true;
}
