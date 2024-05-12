// Zadanie 1

let liczby = [];
for (let i=0; i < 10; i++) {
    let liczba = prompt("Wpisz liczbę całkowitą: ");
    liczby.push(parseInt(liczba));
}

console.log("Wprowadzone liczby:", liczby);

let szukanaLiczba = parseInt(prompt("Podaj liczbę całkowitą do znalezienia:"));
let licznik = liczby.filter(x => x === szukanaLiczba).length;
console.log(`Liczba ${szukanaLiczba} występuje ${licznik} razy w tablicy.`);

// Zadanie 2

let number = [1, 2, 3, 4, 5, 6];
let indeks = parseInt(prompt("Podaj indeks, gdzie wstawić liczbę (0-5):"));
let nowaLiczba = parseInt(prompt("Podaj nową liczbę do wstawienia:"));
number.splice(indeks, 0, nowaLiczba);
console.log("Zaktualizowana tablica:", number);

// Zadanie 3

let ciag = prompt("Wpisz ciąg znaków do odwrócenia:");
let odwroconyCiąg = ciag.split('').reverse().join('');
console.log("Odwrocony ciąg:", odwroconyCiąg);
