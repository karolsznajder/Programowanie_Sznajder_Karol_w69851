document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    const checkValue = (field, message) => {
        const errorSpan = document.getElementById(`${field.id}Error`);
        if (!field.value.trim()) {
            field.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    const checkLength = (field, minLength, message) => {
        const errorSpan = document.getElementById(`${field.id}Error`);
        if (field.value.length < minLength) {
            field.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    const checkEmail = (field, message) => {
        const errorSpan = document.getElementById(`${field.id}Error`);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(field.value)) {
            field.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    const checkPasswordStrength = (field, message) => {
        const errorSpan = document.getElementById(`${field.id}Error`);
        const strongPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!strongPasswordPattern.test(field.value)) {
            field.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    const checkPasswordsMatch = (field1, field2, message) => {
        const errorSpan = document.getElementById(`${field2.id}Error`);
        if (field1.value !== field2.value) {
            field2.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field2.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    const checkAge = (field, message) => {
        const errorSpan = document.getElementById(`${field.id}Error`);
        const birthDate = new Date(field.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();
        if (age < 18 || (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
            field.setCustomValidity(message);
            errorSpan.textContent = message;
        } else {
            field.setCustomValidity('');
            errorSpan.textContent = '';
        }
    };

    form.addEventListener('input', (event) => {
        const target = event.target;

        switch (target.id) {
            case 'imie':
            case 'nazwisko':
                checkValue(target, 'To pole jest wymagane.');
                break;
            case 'email':
                checkEmail(target, 'Podaj poprawny adres email.');
                break;
            case 'haslo':
                checkPasswordStrength(target, 'Hasło musi mieć co najmniej 8 znaków, zawierać litery i cyfry.');
                break;
            case 'powtorzHaslo':
                checkPasswordsMatch(document.getElementById('haslo'), target, 'Hasła muszą być takie same.');
                break;
            case 'telefon':
                checkValue(target, 'Podaj poprawny numer telefonu.');
                break;
            case 'plec':
            case 'kraj':
                checkValue(target, 'To pole jest wymagane.');
                break;
            case 'data_urodzenia':
                checkAge(target, 'Musisz być pełnoletni aby się zarejestrować.');
                break;
        }
    });

    form.addEventListener('change', (event) => {
        const target = event.target;

        if (target.id === 'kraj') {
            const wojewodztwoField = document.getElementById('wojewodztwo');
            if (target.value === 'polska') {
                wojewodztwoField.disabled = false;
            } else {
                wojewodztwoField.disabled = true;
                wojewodztwoField.value = '';
            }
        }

        if (target.id === 'wojewodztwo') {
            const adresZamieszkaniaField = document.getElementById('adresZamieszkania');
            const adresKorespondencyjnyCheckbox = document.getElementById('adresKorespondencyjnyCheckbox');
            const adresKorespondencyjnyField = document.getElementById('adresKorespondencyjny');

            if (target.value) {
                adresZamieszkaniaField.disabled = false;
                adresKorespondencyjnyCheckbox.disabled = false;
                if (!adresKorespondencyjnyCheckbox.checked) {
                    adresKorespondencyjnyField.disabled = false;
                    adresKorespondencyjnyContainer.style.display = 'block';
                }
            } else {
                adresZamieszkaniaField.disabled = true;
                adresZamieszkaniaField.value = '';
                adresKorespondencyjnyCheckbox.disabled = true;
                adresKorespondencyjnyCheckbox.checked = true;
                adresKorespondencyjnyField.disabled = true;
                adresKorespondencyjnyField.value = '';
                adresKorespondencyjnyContainer.style.display = 'none';
            }
        }

        if (target.id === 'adresKorespondencyjnyCheckbox') {
            const adresKorespondencyjnyField = document.getElementById('adresKorespondencyjny');
            adresKorespondencyjnyField.style.display = target.checked ? 'none' : 'block';
            adresKorespondencyjnyField.disabled = target.checked;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const fields = form.querySelectorAll('input, select');
        fields.forEach(field => {
            field.reportValidity();
            if (!field.checkValidity()) {
                valid = false;
            }
        });

        if (valid) {
            alert('Formularz został poprawnie wypełniony!');
        } else {
            alert('Proszę poprawić błędy w formularzu.');
        }
    });

    document.getElementById('telefon').addEventListener('input', (event) => {
        const target = event.target;
        target.value = target.value.replace(/\D/g, '');
    });
});
