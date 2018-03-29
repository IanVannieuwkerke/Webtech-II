const password = 'bier';

let guess = prompt('wat is het geheime wachtwoord');
let amounttries = 1;

if(password == guess) {
    document.write('goed zo rakker');
}

while(password != guess){
    tries++; //
    guess = prompt('wat is het geheime wachtwoord');
}

document.write('je het wachtwoord geraden');
document.write(' na ' + amounttries + ' pogingen!');