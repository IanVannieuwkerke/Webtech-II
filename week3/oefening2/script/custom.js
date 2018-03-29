//waarde van fastfood
let popcorn = 5;
let hamburger = 4;
let donut = 10;

//input velden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

//input velden invullen
input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + hamburger + hamburger;
input3.value = hamburger + donut*2 + popcorns;

//correcte oplossigen berekenen
let correctSolution = hamburger + donut + popcorn;

//button declareren
let checkbutton = document.getElementById('check');

//als er op de knop geklikt wordt
checkbutton.addEventListener('click', function(){
    if(correctSolution == userSolution.value) {
        //correct
        correctImg.style.display = 'block';
    }
    
    else{
        //wrong
        wrongImg.style.display = 'block';
        // alert('uh oh')
    }
}