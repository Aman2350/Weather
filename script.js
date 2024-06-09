let inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btn");
let nameCity = document.getElementById("nameCity");
let weather = document.getElementById("weather");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let speed = document.getElementById("speed");
let deg = document.getElementById("deg");
let country = document.getElementById("country");



// let url="https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=ff092519bc84a7badf9349529e5ce1d5"

  const fetchApi = ()=>{

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +
    "&appid=ff092519bc84a7badf9349529e5ce1d5")
    .then((response)=>response.json())
    .then((data)=>{
        nameCity.innerHTML=`City : ${data.name}`;
        weather.innerHTML=`${data.weather[0].description}`;
        humidity.innerHTML=`${data.main.humidity}`;
        temp.innerHTML=`${data.main.temp}*F`;
        pressure.innerHTML=`${data.main.pressure}`;
        speed.innerHTML=`${data.wind.speed}`;
        deg.innerHTML=`${data.wind.deg}`;
        country.innerHTML = `Country : ${data.sys.country}`;
    })
    
    
    .catch((err)=>{
        nameCity.innerHTML = "Invalid City or Country";
        console.log("Invalid City");
})
  }


  btn.addEventListener("click", fetchApi);