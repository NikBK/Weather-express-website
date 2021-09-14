
let form = document.querySelector('form');
let input = document.querySelector('#inputText');
let tempPara = document.querySelector('#temp-result');
let placePara = document.querySelector('#place-result');
let img = document.querySelector('img');
let weatherDescription = document.querySelector('#weather-description');
let mapImg = document.querySelector('#map-img');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    tempPara.innerText = 'Loading weather details...';
    placePara.innerText = '';

    let address = input.value;

    fetch('http://localhost:5000/getWeather?address=' + address)
        .then(res => res.json())
        .then((data) => {
            if(data.error){
                tempPara.innerText = data.error;
                return;
            }
            placePara.innerText = data.place;
            tempPara.innerText = data.temp;
            img.setAttribute('src', data.img);
            mapImg.setAttribute('src', data.map);
            mapImg.style.display = 'block'
            weatherDescription.innerText = data.weatherDescription;
        });
});