// Zadanie 3
var a = 10
var b = 20
var c = 23.2

var dodawanie = a + b + c;
var odejmowanie = a - b - c;
var mnozenie = a * b * c;
var dzielenie = a / b / parseFloat(c);

// alert("Wynik dodawania: " + dodawanie)
// alert("Wynik odejmowania: " + odejmowanie)
// alert("Wynik mnożenia: " + mnozenie)
// alert("Wynik dzielenia: " + dzielenie)

// console.log(dodawanie)
// console.log(odejmowanie)
// console.log(mnozenie)
// console.log(dzielenie)

document.getElementById("dodawanie").innerHTML = "Wynik dodawania: " + dodawanie;
document.getElementById("odejmowanie").innerHTML = "Wynik odejmowania:" + odejmowanie
document.getElementById("mnozenie").innerHTML = "Wynik mnożenia:" + mnozenie
document.getElementById("dzielenie").innerHTML = "Wynik dzielenia: " + dzielenie

// Zadanie 4

for (var i=0; i <= 100; i++)
    if(i % 2 == 0) {
        console.log(i);
    }

// Zadanie 5

function obliczPoleTrojkata(a, b, c) {
    var p = (a + b + c) / 2;
    var pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return pole;
}

var a = 5;
var b = 6;
var c = 7;

var pole = obliczPoleTrojkata(a, b, c);
console.log("Pole trójkąta o bokach " + a + ", " + b + ", " + c + " wynosi: " + pole);

document.getElementById("wynik").innerHTML = "Pole trójkąta o bokach " + a + ", " + b + ", " + c + " wynosi: " + pole;
