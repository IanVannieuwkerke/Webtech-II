let btn = document.getElementById('button');

btn.addEventListener('click', function() {

    //geselcteerde radio button
    let color = document.querySelector('input[name="color"]:checked');

    //kort met teplate literal en expression
    //btn.className = `btn btn ${(color) ? color.value : 'btn-warning'}`;
    
    if(color) {
        btn.className = 'btn ' + color.value;
    }
    else {
        btn.className = 'btn ' + 'btn-warning';
    }
});

