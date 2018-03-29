let fruit = ["appel", "peer", "banaan", "kiwi", "ananas"];
let veggies = ["tamaat" ,"prei", "wortel", "ui", "bloemkool"];

const showItems = function ( arrayName ){
    for(let i = 0;i < arrayName.length;i++){
        document.write(arrayName[i]+"<br>");};
}
 showItems(veggies);
