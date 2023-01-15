// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.0997, -94.5786], 5);


// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790]
//   ];

// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6436, -73.7820]
  ];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: '4',
    dashArray:'10,10',
    opacity:'0.5'
  }).addTo(map);


// var marker = L.marker([51.5, -0.09]).addTo(map);

// get the data from cities.js

// let cityData = cities;



// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    }); 

// var marker = L.circleMarker([34.0522, -118.2437],{
//                 radius: 300,
//                 color: "black",
//                 fillColor: "#ffffa1"

// }).addTo(map);

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);