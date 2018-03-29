// knop declaren
const buton =document.getElementById('btnMakeJoke');
const factsList = document.getElementById('facts');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
};


button.addEventListener('click', function() {

    // waarden uit de elementen declarene
    const firstName = document.getElementById('firstNamefield').value;
    const lastName = document.getElementById('lastNamefield').value;

    // url met dynamische parameters
    const url = 'http://api.icndb.com/jokes/random?randomfirstname' + firstname + '&lastname' + lastname;

        getJSON(url, function(error, data) {

            // schrijf een fact in het venster
            document.write(data.value.joke);

    });

})

// json functie oproepen, binnen de callback manipuleren we de verkregen data
getJSON('http://api.icndb.com/jokes/random?randomfirstname' + firstname + '&lastname' + lastname + function(error, data) {
    console.log(data);

//schrijft de fact in het venster
document.write(data.value.joke);

})
