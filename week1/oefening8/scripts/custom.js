let number = 7263;
// 1 uur = 3600 seconden
let amounthours = number / 3600;
console.log(amounthours);
// naar beneden afronden
amounthours = math.floor(amounthours);
// resultaat tonen
console.log(amounthours);

// hoeveel seconden blijven er over
let remainingseconds = number % 3600;
console.log('overgebleven seconden: ' + remainingseconds);

let amountminutes = math floor(remainingseconds/ 60);
console.log('aantal minuten: ' + amountminutes);