var lang = 10.0497094;
var long = 76.333456;
var newMarker;
var querySnapshot;

const details = document.querySelector(".details-list");
const name = document.querySelector(".name");
const phone = document.querySelector(".phone")

var map = L.map('map').setView([lang,long], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lang,long]).addTo(map);

document.querySelector('.police').addEventListener('click', async () => {
    if (newMarker)
        map.removeLayer(newMarker);
        newMarker = L.marker([10.049, 76.335]).addTo(map);
        newMarker.bindPopup("Plumber").openPopup();
        details.style.opacity = 1;
        name.innerText = "Name : John";
        phone.innerText = "Phone : 979******";
});

document.querySelector('.medic').addEventListener('click', async () => {
    if (newMarker)
        map.removeLayer(newMarker);
        newMarker = L.marker([10.052, 76.331]).addTo(map);
        newMarker.bindPopup("Electrician").openPopup();
        details.style.opacity = 1;
        name.innerText = "Name : Shifan";
        phone.innerText = "Phone : 945******";
});

document.querySelector('.fireForce').addEventListener('click', async () => {
    if (newMarker)
        map.removeLayer(newMarker);
        newMarker = L.marker([10.05, 76.331]).addTo(map);
        newMarker.bindPopup("Gardener").openPopup();
        details.style.opacity = 1;
        name.innerText = "Name : Sabari";
        phone.innerText = "Phone : 979******";
});