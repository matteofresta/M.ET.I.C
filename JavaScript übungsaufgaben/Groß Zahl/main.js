let zahl = parseFloat(prompt("Bitte gib die erste Zahl ein:"));
let zahl2 = parseFloat(prompt("Bitte gib die zweite Zahl ein:"));
let zahl3 = parseFloat(prompt("Bitte gib die dritte Zahl ein:"));

if (zahl >= zahl2 && zahl >= zahl3) {
    alert('Die erste Zahl ist am größten');
} else if (zahl2 >= zahl && zahl2 >= zahl3) {
    alert('Die zweite Zahl ist am größten');
} else if (zahl3 >= zahl && zahl3 >= zahl2) {
    alert('Die dritte Zahl ist am größten');
}


