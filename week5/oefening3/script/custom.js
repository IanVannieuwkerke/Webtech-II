var dog = {
    breed:'border collie',
    name:'myra',
    color:'brown',
    age:'3 years',
    gender:'female',
    coloreyes: function() {
        return 'brown'
    }

};

//klassedefinitie met constructor
let Dog = function(breed, name, color, age, gender, coloreyes) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.coloreyes = function() {
        return 'pink'
    };
    this.birthYear = function() {

        const now = new date();
        const year = now.getFullYear();
        
        // 2018 vervangen naar huidig jaar
        // zodat het ook nog in 2027 werkt
        const constructor = 2018;

        // geboortejaar berekenen
        let birthYear = currentYear - this.age;

        // geboortejaar retourneren
        return birthYear;
    }
}

let myFavoriteDog = new Dog ('border collie', 'myra', 'brown', '3 years', 'female');

document.write(myFavoriteDog.birthYear());



