// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30 ], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"14",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// grabbing our gesJson data
// L.geoJSON(sanFranAirport, {
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h3>" + feature.properties.name + "</h3> <hr> <h3> " + feature.properties.city + " , " + feature.properties.country  + "</h3>")
//   }

// }).addTo(map);



// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(feature);
//     layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
//   }

// }).addTo(map);

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

// let line = [
//     [37.6214, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6436, -73.7820]
//   ];


// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     weight: '4',
//     dashArray:'10,10',
//     opacity:'0.5'
//   }).addTo(map);


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
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  // Light: light,
  "Street": streets,
  // Dark: dark
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
// let earthQuack  = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";




//Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor: "yellow"
}

// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson" ).then(function(data) {
//   console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.

    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
    },

    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo, 
   
    // We create a popup for each circleMarker to display the magnitude and
    //  location of the earthquake after the marker has been created and styled.

    onEachFeature: function(feature, layer) {
        // console.log(feature);
        layer.bindPopup("<h3> Magnitude: " + feature.properties.mag + "</h3> <hr> <h3> Location: " + feature.properties.place + "</h3>");
    }
}).addTo(map);



});

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.

function styleInfo(feature) {

    return {
        opacity:1,
        fillOpacity:1,
        // fillColor:"#ffae42",
        fillColor: getColor(feature.properties.mag),
        color:"#000000",
        redius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}

function getColor(magnitude) {
    if (magnitude > 5) {
        return "#ea2c2c";
    }

    if (magnitude >4) {
        return "#ea822c";
    }

    if (magnitude >3) {
        return "#ee9c00";
    }

    if (magnitude >2) {
        return "#eecc00";
    }

    if (magnitude >1) {
        return "#d4ee00";
    }

    return "#98ee00" ;
}


function getRadius(magnitude) {
    if (magnitude ===0) {
        return 1;
    }
    return magnitude * 4;
}

