// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

// variables
const names = ["Henk", "Piet", "Fred", "Joop"];

// for loop through 'names', change name and overwrite the list 'names'
for (let i = 0; i < names.length; i++) {
     names[i] = names[i] + "je";
}

// log the list
console.log(names);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// variables
const numbers = [2, 4, 5, 29, 38];

// for loop through 'numbers', multiply with 3 and overwrite the list 'numbers'
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 3;
}

// log the list
console.log(numbers);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// variables
const squares = [30, 2, 8, 24, 11];

// for loop through 'squares', cubes the number and overwrite the list 'squares'
for ( let i = 0; i < squares.length; i++) {
    squares[i] = (squares[i] ** 3);
}

// log the list
console.log(squares);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
