let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.3167108, lng: 69.2838385 },
    zoom: 8,
    disableDefaultUI: true
  });
}

// initMap();
