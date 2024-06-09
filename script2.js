console.log("working");
 let inputValue = document.getElementById("inputValue");
 let btn = document.getElementById("submit");
 let displayCity = document.getElementById("displayCity");
 let cityCode = document.getElementById("cityCode");
 let country = document.getElementById("country");
 let weather = document.getElementById("weather");
 let temp = document.getElementById("temp");
 let sunrise = document.getElementById("sunrise");
 let sunset = document.getElementById("sunset");
 let humidity = document.getElementById("humidity");

const fetchApi = ()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value +
     "&appid=ff092519bc84a7badf9349529e5ce1d5")
     .then((response)=>(response.json()))
     .then((data)=>{
        displayCity.innerHTML = `City - ${data.name}`;
        cityCode.innerHTML = `Code - ${data.cod}`;
        country.innerHTML = `Country - ${data.sys.country}`;
        weather.innerHTML = `Weather - ${data.weather[0].description}`;
        temp.innerHTML = `Temprature - ${data.main.temp}`;
        sunrise.innerHTML = `Sunrise - ${data.sys.sunrise}`;
        sunset.innerHTML = `Sunset - ${data.sys.sunset}`;
        humidity.innerHTML = `Humidity - ${data.main.humidity}`;
 
     })
     .catch((error)=>{
        displayCity.innerHTML = `Invalid City`;
        console.log("Invalid City");
     })
}

btn.addEventListener("click",fetchApi);