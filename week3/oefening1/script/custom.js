// korte notatie, eentje bijtellen
// i++
// i = i +1;

for(let i = 7; i <=100; i++) {

//document.write(i + '<br>');


//indien het niet deelbaar is door 3
//of indien niet deelbaar ddor 5
    if(i%3 != 0 && i%5 !=0) {
        document.write(i + '<br>');
    }
    else if(i%3 ==0){
        document.write('bitter');
    }
    else if(i%5 ==0){
        document.write('bal');
    }

    document.write('<br>');
}