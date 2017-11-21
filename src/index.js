// console.log("Trip Planner Party!!");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aHkxMjM0IiwiYSI6ImNqYTl0b3ViMjBiNXIyd25jdm12aTVlMG4ifQ.yyPzgxriF0oSxWLMiWuJ_A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});