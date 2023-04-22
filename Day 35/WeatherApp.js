/* - You must display the following data points on the page from the API:
Current Date, City from the zipcode, Current temperature in ferinheight, current conditions, Temp Hi/Lo */

// - You must accept input from the user asking for the zip code they would like the weather of


// document.getElementById("Submit").addEventListener("click"); // should i use submit button? Where will data go?
// document.getElementById("CurrentDate")

const cityInput = document.getElementsByClassName("#CityZipcodeForm");
const zipcodeInput = document.getElementsByClassName(".zipCodeInput");
const currentDate = document.querySelector("#currentDate");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const currentConditions = document.querySelector("#currentConditions");
const tempHi = document.querySelector("#tempHi");
const tempLo = document.querySelector("#tempLo");


// Api Key
const APIKey = "d3bcabc4a44015d8efc8f427f4b4ba63"




// Functions:

// - You must make an API call to the service and get the weather data
// Function to fetch City Data
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function getWeatherDataCity(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey)
        .then((response) => response.json())
        .then(data => displayWeather(data))
}


// - You must make an API call to the service and get the weather data
// Function to fetch Zip Code Data
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
function getWeatherDataZipcode(zipCode) {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=" + APIKey)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
        // .catch(error) => {
        //     console.error("Error getting weather data", error);
        // }
    };

// Function Retrieve Weather Data from API
function getWeather() {
    const userInput = city.value;
    if (userInput != isNaN) {
        getWeatherDataCity(userInput);
    } else {
        getWeatherDataZipcode(userInput);
    }
}

// EventListener Function for Form
city.addEventListener("change", function() {
    getWeather();
});

//  Function to Display Weather Data
function displayWeather(data) {
    const currentDate = document.getElementById("currentDate");
    currentDate.innerHTML = new Date().toDateString(); //fix toDateString
    city.innerText = data.name;
    temp.innerText = data.main.temp + "°F";
    currentConditions.innerText = data.weather[0].description;
    tempHi.innerText = "High: " + data.main.temp_max + "°F";
    tempLo.innerText = "Low: " + data.main.temp_min + "°F";
}































// Basic requirements:

// - A page with a heading and sections separating your content

// - The page must be styled either using a CSS framework or your own custom CSS

// - You must make an API call to the service and get the weather data

// - You must accept input from the user asking for the zip code they would like the weather of

/* - You must display the following data points on the page from the API:
Current Date, City from the zipcode, Current temperature in ferinheight, current conditions, Temp Hi/Lo */