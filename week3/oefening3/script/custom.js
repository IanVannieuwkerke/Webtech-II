//draw a mounatain
drawmountain(2);
drawmountain(5);
drawmountain(10);



function drawmountain(lenghtOfMountain) {

    // initiele toplengte
    let i = 1;

    // helling
    document.write('/');
    
    //zolang het einde van de top nog niet bereikt
    while(i < lenghtOfMountain){
        document.write('"');
        i++;
    }

    //afdaling
    document.write("\\");

}

function drawflatarea(){


    
}