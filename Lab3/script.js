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
document.getElementById("odejmowanie").innerHTML = "Wynik odejmowania: " + odejmowanie
document.getElementById("mnozenie").innerHTML = "Wynik mnożenia: " + mnozenie
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

// Zadanie 6

var imie = prompt("Jak masz na imię: ")
console.log("Witaj, " + imie + "!"); 

// Zadanie 7

var a = prompt("Podaj pierwszą liczbę całkowitą: ");
var b = prompt("Podaj drugą liczbę całkowitą: ");

a = parseInt(a);
b = parseInt(b);

var suma = a + b;

document.getElementById("wynik_dodawania").innerHTML = "Wynik dodawania liczb " + a + " i " + b + " wynosi: " + suma;

// Zadanie 8

var liczba1 = parseFloat(prompt("Podaj pierwszą liczbę: "));
var liczba2 = parseFloat(prompt("Podaj drugą liczbę: "));
var liczba3 = parseFloat(prompt("Podaj trzecią liczbę: "));

var liczby = [liczba1, liczba2, liczba3];

var najwieksza = Math.max(...liczby);

console.log("Największa spośród podanych liczb to: " + najwieksza);
document.getElementById("najwieksza_liczba").innerHTML = "Największa spośród podanych liczb to: " + najwieksza;

// Zadanie 9

function najwiekszyWspolnyDzielnik(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
var liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

var nwd = najwiekszyWspolnyDzielnik(liczba1, liczba2);
console.log("Największy wspólny dzielnik liczb " + liczba1 + " i " + liczba2 + " to: " + nwd);

// Zadanie 11
    
var wylosowanaLiczba = Math.floor(Math.random() * 101);
var liczbaProb = 0;

function sprawdzPropozycje() {
    var propozycja = parseInt(document.getElementById("propozycja").value);

    if (isNaN(propozycja) || propozycja < 0 || propozycja > 100) {
        alert("Podaj liczbę z przedziału od 0 do 100.");
    } else {
        liczbaProb++;

        if (propozycja === wylosowanaLiczba) {
            alert("Gratulacje! Zgadłeś liczbę " + wylosowanaLiczba + " po " + liczbaProb + " próbach.");
            location.reload();
        } else if (propozycja < wylosowanaLiczba) {
            alert("Podana liczba jest za mała. Spróbuj większej.");
        } else {
            alert("Podana liczba jest za duża. Spróbuj mniejszej.");
        }
    }
}