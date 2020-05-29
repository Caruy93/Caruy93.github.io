// Script uses OpenWeather API to provide Helsinki's weather information
const openWeatherKey = '1eb909d1a2afc9bf25c25ffd2b76fffe';
const openWeatherUrl = 'api.openweathermap.org/data/2.5/weather';

// Fetch weather information
const getForecast = async() => {
    const urlToFetch = `${openWeatherUrl}?q=helsinki&appid={openWeatherKey}`;

    try {

        const response = await fetch(urlToFetch);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }

    } catch(error) {console.log(error);}
}

// Render forecast text
const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day)
}

// Execute weather update
const executeUpdate = () => {
    getForecast().then(forecast => renderForecast(forecast))
    return false;
}

executeUpdate();