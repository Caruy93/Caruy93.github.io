// Script uses OpenWeather API to provide Helsinki's weather information
const openWeatherKey = '1eb909d1a2afc9bf25c25ffd2b76fffe';
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Access inline weather text
const weatherElement = document.getElementById('weather-update');
// Self intro paragraph
const selfIntroHTML = document.getElementById('self-introduction');

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

// Render weather emoji
const renderEmoji = (day) => {
    let weatherEmoji = createWeatherEmoji(day)
    return weatherEmoji;
}

// Execute weather update and determine emoji
const executeUpdate = async() => {

    const weatherUpdate = await getForecast().then(forecast => renderForecast(forecast));
    const weatherEmoji = await getForecast().then(forecast => renderEmoji(forecast));

    weatherElement.innerHTML = weatherUpdate;
    selfIntroHTML.innerHTML += ` ${weatherEmoji}`;

    return false;
}

executeUpdate();

