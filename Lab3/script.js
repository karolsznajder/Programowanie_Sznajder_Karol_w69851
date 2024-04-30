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