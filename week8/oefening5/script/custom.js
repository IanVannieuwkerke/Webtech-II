function initMap() {
        
    /** code om de kaart te initialiseren **/
    const myHouseLatLng = {
        lat: 50.909538,
        lng: 3.736131
    };
    
    const myStyles = [];

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myHouseLatLng,
        styles: myStyles
    });
    
    let marker = new google.maps.Marker ({
        position: myHouseLatLng,
        map: map
    });
}