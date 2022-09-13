'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function(country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){

//     const [data] = JSON.parse(this.responseText)
//     console.log(data);
//     console.log(data.flags.png);
//     console.log(Object.values(data.currencies)[0].name);
    

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//          <h3 class="country__name">${data.name.common}</h3>
//          <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)} people</p>
//          <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//       </div>
//   </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');


const renderCountry = function(data, className ='' ){
    const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
     <h3 class="country__name">${data.name.common}</h3>
     <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)} people</p>
     <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
     <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
</article>
`;
countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    
    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText)
        console.log(data);
        
        //Render country1;
        console.log(data.flags.png);
        console.log(Object.values(data.currencies)[0].name);
        renderCountry(data);

        //Get neigbour country (2)
        const [neigbour] = data.borders;
        if(!neigbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neigbour}`);
        request2.send();

        request2.addEventListener('load', function(){
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);
            
            //Render country1;
            console.log(data2.flags.png);
            console.log(Object.values(data2.currencies)[0].name);
            renderCountry(data2, 'neighbour');
        });

    });
};    
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');

setTimeout(() => {
    console.log("I seconf pleas");
    setTimeout(() => {
        console.log("tghirdsddksd pabehggg")
    }, 1000);
}, 2000);
*/ 


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
        console.log(data[0]);
    }
        );
};
getCountryData('usa');