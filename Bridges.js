let KansasCoordinates = [39.0119, -98.4842]
zoomLevel = 3 // 1 = whole world 20 = city blocks

let map = L.map('US-Map').setView(KansasCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a> contributors'
}).addTo(map);

bridges =  [
    {"name": "Verrazano-Narrows Bridge", "span_length": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "span_length": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "span_length": "1158.0", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "span_length": "1067.0", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "span_length": " 	853.44", "coordinates": [47.2690, -122.5517] }
]

bridges.forEach(function(LongestBridges) {
    let markerText = `<b>${LongestBridges.name}</b><br><b>${LongestBridges.span_length}"</b>`
    L.marker(LongestBridges.coordinates).bindPopup(markerText).addTo(map)
})


let USACircle = L.circle(KansasCoordinates, {
    color: 'magenta',
    radius: 2200000,
    fillOpacity: 0.2
})
    .bindPopup('USA Area')
    .addTo(map)
