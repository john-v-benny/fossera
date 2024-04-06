var lang = 10.0497094;
var long = 76.333456;
var newMarker;
var querySnapshot;
var requestOf;

const details = document.querySelector(".details-list");
const name = document.querySelector(".name");
const phone = document.querySelector(".phone");

var map = L.map('map').setView([lang, long], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lang, long]).addTo(map);

document.querySelector('.police').addEventListener('click', async () => {
    requestOf = "police";
    details.style.opacity = 1;
});

document.querySelector('.medic').addEventListener('click', async () => {
    requestOf = "medic";
    details.style.opacity = 1;
    name.innerText = "Name : Sindhu";
    phone.innerText = "Phone : 945******";
});

document.querySelector('.fireForce').addEventListener('click', async () => {
    requestOf = "fireForce";
    details.style.opacity = 1;
    name.innerText = "Name : Vijesh";
    phone.innerText = "Phone : 979******";
});


document.querySelector('.request').addEventListener('click', () => {
    if (newMarker)
        map.removeLayer(newMarker);
    if (requestOf === "police") {
        newMarker = L.marker([10.049, 76.335]).addTo(map);
        newMarker.bindPopup("Police").openPopup();
    }
    else if (requestOf === "medic") {
        newMarker = L.marker([10.052, 76.331]).addTo(map);
        newMarker.bindPopup("medic").openPopup();
    }
    else if (requestOf === "fireForce") {
        newMarker = L.marker([10.05, 76.331]).addTo(map);
        newMarker.bindPopup("Fireforce").openPopup();
    }
});
