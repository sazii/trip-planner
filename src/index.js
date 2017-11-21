// console.log("Trip Planner Party!!");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aHkxMjM0IiwiYSI6ImNqYTl0b3ViMjBiNXIyd25jdm12aTVlMG4ifQ.yyPzgxriF0oSxWLMiWuJ_A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


//new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const marker = buildMarker("hotel", [-74.009151, 40.705086]);
marker.addTo(map);