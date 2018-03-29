let number = parseInt(prompt('geef een eerste getal in'));
number = parseInt(number);
let number2 = parseInt(prompt('geef een tweede getal in'));
number2= parseInt(number2);

let sum = number + number2;

let text = `de som van ${number} en ${number2} is ${sum}`;

document.write(text);

//---------------------------------//

let i = 7;

console.log(i); // 7 -> want ongewijzigd
console.log(i++); // 7 -> want eerst gelogd, dan pas 1 aan toegevoegd
console.log(i); // 8 -> 1 is toegevoegd in voorgaande statement
console.log(++i); // 9 -> ééntje toevoegen, dan loggen