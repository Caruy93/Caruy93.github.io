// Script uses OpenWeather API to provide Helsinki's weather information
const openWeatherKey = '1eb909d1a2afc9bf25c25ffd2b76fffe';
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Access inline weather text element
const weatherElement = document.getElementById('weather-update');

// Fetch weather information
const getForecast = async() => {
    const urlToFetch = `${openWeatherUrl}?q=helsinki&appid=${openWeatherKey}`;

    try {

        const response = await fetch(urlToFetch);

        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse;
        }

    } catch(error) {console.log(error);}
}

// Render forecast text
const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day)
    return weatherContent;
}

// Execute weather update
const executeUpdate = async() => {
    const weatherUpdate = await getForecast().then(forecast => renderForecast(forecast));

    weatherElement.innerHTML = `${weatherUpdate}`;
    return false;
}

executeUpdate();

