function initMap() {
  const uluru = { lat: 40.915551, lng: -74.166548 };
  const grayStyles = [
    {
      featureType: "all",
      stylers: [{ saturation: -80 }, { lightness: 50 }]
    },
    { elementType: "labels.text.fill", stylers: [{ color: "#A3B303" }] }
  ];
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.915551, lng: -74.166548 },
    zoom: 10,
    styles: grayStyles,
    scrollwheel: false
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map
  });
  const infoWindow = new google.maps.InfoWindow({
    content: `<h3 class="text-center">SuperTrolin Entertainment
              <br/> 
              13 Park Ave, Paterson, NJ 07501</h3>`
  });
  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}
