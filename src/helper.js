// API URL and Key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "d7262d216f88126dadeafb289a64558a"
    
// Get weather data
async function getWeatherInfo(city) {
    try {
        let data = await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}`);       
        let jsonData = await data.json();
        let result = {
            city: city,
            temp: jsonData.main.temp,
            tempMin: jsonData.main.temp_min,
            tempMax: jsonData.main.temp_max,
            humidity: jsonData.main.humidity,
            feelsLike: jsonData.main.feels_like,
            weather: jsonData.weather[0].description
        };
        return result;
    } catch (error) {
        throw error;
    }

}

// Export the function
export default getWeatherInfo;