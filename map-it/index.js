var locations = [
    ["Delhi", 28.6341, 77.2025, 4],
    ["Gurugram", 28.4595, 77.0266, 5],
    ["Ghaziabad", 28.6692, 77.4538, 3],
];

var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(28.6041, 77.3025),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
    });

    google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i)
    );
}
