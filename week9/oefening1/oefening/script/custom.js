 // stap 1: knoop en inputveld declaren
 let btnSubmit = document.getElementById('storeMyMole');
 let inputfield = document.getElementById('nameOfTheMole');

 // stap 2: click event zetten op de knop
 btnSubmit.addEventListenerv('click', function() {
     //demol ui het inputveld halen
     let mole = inputfield.value;

     // na een klik moet het in de locale storage opgeslagen worden
     localStorage.setItem('myMole', mole);
 });

 // stap 3: controleren of er een mol in de local storage zit?
 let storeMole = localStorage.getItem('myMole');
 if(storeMole != null); {
     btnSubmit.style.display = "none";
     inputfield.style.display= "none";

     // rood od grone scherm
     if(storeMole == 'pieter')
         moleBackground.style.BackgroundImage = "url('./groen.png')";
     else
         moleBackground.style.BackgroundImage = "url('./rood.png')";