let myName = 'Edward Scissorhands';
let myJob = 'Gardener';
let myAge = 29;

/**
 doel: output in de console
 
    My name is Edwars Scissoerhands ans I am a gardener
    I am 29 years old
 
 */

// zonder template literals
console.log(
    'My name is' + myName + 'and I am a ' +  myJob + '.\n I am ' + myAge + ' years old.'
)

// met template literals en back tick
console.log(`My name is ${myName} and I am a ${myJob} I am  ${myAge}  years old.`);