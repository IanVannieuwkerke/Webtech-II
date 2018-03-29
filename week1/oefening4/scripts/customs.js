/********************************************************************* 
* @author     Ian Vannieuwkerke
* @created    15/02/2018
* @modified   15/02/2018
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/



// geef een getal in
let number = prompt('geef een getal in');

// concantenation: voeg getal toe aan de string 'hetgat...'
console.log("dit is wat tekst");
console.log(number);

//hoe lang is de string
let text = 'het getal dat je invoerde was: ' + number;
document.write(text);

let amountcharacters = number.length;

//gebruik makend van interpolatie om de variabele in de string te steken
let text2 = `het getal is ${amountcharacters} karakters lang`;

// breng het resultaat op het scherm
document.write(text);
document.write('<br>');
document.write(text2);