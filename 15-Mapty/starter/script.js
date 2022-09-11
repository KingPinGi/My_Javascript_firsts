'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Using geolocation api
if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(
    function(position){
        // position.coords[latitude] = 7.5028767;
        // position.coords[longitude] = 4.5117397;
        // const {latitude} = position.coords;
        // const {longitude} = position.coords;ns 
        const latitude = 7.5028767;
        const longitude = 4.5117397;
        console.log(position);
        console.log(`https://www.google.com/maps/@7.5028767,4.5117397`);

        const coords = [Number(latitude), Number(longitude)];
        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/ copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
         }, function(){
        alert('Could not get your position')
})