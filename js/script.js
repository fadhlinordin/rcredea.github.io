/* Google Map API */
function myMap() {
    var myLatLng = {lat: 3.052658, lng: 101.534912};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: myLatLng
            });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
            });
      } 