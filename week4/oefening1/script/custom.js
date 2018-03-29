// 1| element selecteren en in variabelen
let anchorTags, strongTags, spanTags

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');

//eerste anchor tag uit array van anchortags halen
let linkElement = anchorTags[0];

//event toepassen
linkElement.addEventListener('mouseover', function() {

    //eertse strong tag ornaje maken
    let firststrongtag = strongTags[0];
    firststrongtag.style.color = 'orange';

    // tweede strong tag oranje maken
    strongTags[1].style.color = 'orange';

    // alle strongtags doorlopen
    for(let i = 0; 1 < spanTags.lenght; i++) {
        spanTags[i].style.color = 'purple';
    }

});

linkElement.addEventListener('mouseover', function() {

    // alle strongtags doorlopen
    let firststrongtag = strongTags[0];
    firststrongtag.style.color = 'black';

// 2| events toepassen op de link



// elemnt ophalen
let spinachElement = document.getElementById('spinach');
console.log(spinachElement);

//kleur veranderen
spinachElement.style.color = '#FF00FF';