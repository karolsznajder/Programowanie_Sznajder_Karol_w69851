// Zadanie 1

for(let i=1; i<=10; i++) {
    console.log(i);
}

console.log("Happy New Year!");

let i = 0;

while (i <= 9) {
    i++;
    console.log(i);
}
console.log("Happy New Year!");

// Zadanie 2

// function silnia(n) {
//     if (n > 1)
//         return n * silnia(n-1);
//     else
//         return 1;

// }

// let n = prompt("Podaj liczbę, dla której chcesz obliczyć slinię: ");
// console.log(silnia(Number(n)));

// Zadanie 3

// function openWin() {
//     let wiek = prompt("Podaj ile masz lat: ")
//     if (wiek >= 18)
//         window.open("", "_self")
//     else
//         window.open("https://www.gry.pl/")
// }

// openWin();

// Zadanie 4

function changeColor(clickedButton) {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(button => {
      if (button !== clickedButton) {
        button.classList.remove('active');
      }
    });
  
    clickedButton.classList.toggle('active');

}

