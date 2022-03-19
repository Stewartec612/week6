
let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

bridges = [
    {"name": "Verrazano Bridge", "city-state": "New York,NY", "span": 1298.4, "coordinates":[40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city-state": "San Francisco and Marin,CA", "span": 1280.2, "coordinates": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city-state": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates" : [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city-state": "New York,NY and Jersey,NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city-state": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517]}
    ]

let chart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ['Verrazano Bridge', 'Golden Gate Bridge','Mackinac Bridge','George Washington Bridge', 'Tacoma Bridge'],
        datasets: [{
            label: 'Total Span',
            data: [bridges[0].span, bridges[1].span,bridges[2].span,bridges[3].span,bridges[4].span],
            backgroundColor: ['green','purple','red','yellow','blue']
        }]
    }
})


let verraBridgeCoordinates = [40.6066, -74.0447]
let ggBridgeCoordinates = [37.8199, -122.4783]
let mackinacBridgeCoordinates = [45.8174, -84.7278]
let gWashingtonBridgeCoordinates = [40.8517, -73.9527]
let tacomaBridgeCoordinates = [47.2690, -122.5517]

let zoomLevel = 4

//use MI bridge coordinates to get view of all locations
//adjust horizontal coordinates to include aoo bridges in view
let map = L.map('map').setView([42.6066, -100.0447],zoomLevel)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let VerraBridgeMarker = L.marker(verraBridgeCoordinates)
    //link kept loading errors after opening in the dev tools even though it is working
    //hard to read since more kept popping in
    .bindPopup('Verrazano Bridge <br> <a href="https://www.britannica.com/topic/Verrazano-Narrows-Bridge">More Info</a>').addTo(map)

let ggBridgeMarker = L.marker(ggBridgeCoordinates)
    .bindPopup('Golden Gate Bridge<br> <a href="https://www.britannica.com/topic/Golden-Gate-Bridge">More Info</a>').addTo(map)

let mackinacBridgeMarker = L.marker(mackinacBridgeCoordinates)
    .bindPopup('Mackinac Bridge <br><a href="https://www.britannica.com/topic/Mackinac-Bridge">More Info</a>').addTo(map)

let gWashingtonBridgeMarker = L.marker(gWashingtonBridgeCoordinates)
    .bindPopup('GeorgeWashingtonBridge<br><a href="https://www.britannica.com/topic/George-Washington-Bridge">More Info</a>').addTo(map)

let tacomaBridgeMarker = L.marker(tacomaBridgeCoordinates)
    .bindPopup('Tacoma Narrows Bridge<br> <a href="https://www.britannica.com/topic/Tacoma-Narrows-Bridge">More Info</a> ').addTo(map)


