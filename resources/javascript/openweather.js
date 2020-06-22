// Script uses OpenWeather API to provide Helsinki's weather information
const openWeatherKey = '1eb909d1a2afc9bf25c25ffd2b76fffe';
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Self intro paragraph
const selfIntroHTML = document.getElementById('self-intro-body');

// Fetch weather information
const getForecast = async() => {
    const urlToFetch = `${openWeatherUrl}?q=helsinki&appid=${openWeatherKey}`;

    try {

        const response = await fetch(urlToFetch);

        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            throw new Error(response);
        }

    } catch(error) {
        console.log(error);
        // Continue to provide some placeholder weather update
        return {
            "weather": [
                {
                    "main": "Clear",
                    "description": "clear sky"
                }
            ],
            "main": {
                "temp": "290"
            }
        }
  

    }
}

// Render forecast text
const renderForecast = (forecast) => {
    const weatherContent = createWeatherHTML(forecast)
    return weatherContent;
}

// Render weather emoji
const renderEmoji = (forecast) => {
    const weatherEmoji = createWeatherEmoji(forecast)
    return weatherEmoji;
}

// Execute weather update and determine emoji
const executeUpdate = async() => {

    const weatherUpdate = await getForecast()
        .then(forecast => renderForecast(forecast))
        .catch(e => {
            // In case of uncaptured weather condition, default to warm and sunny
            console.log(e);
            return 'warm and sunny';
        });
    const weatherEmoji = await getForecast()
        .then(forecast => renderEmoji(forecast))
        .catch(e => {
            // in case of uncaptured weather condition, default to sunglasses
            console.log(e);
            return String.fromCodePoint(0x1F60E);
        });

    selfIntroHTML.innerHTML = `a developer based in ${weatherUpdate} Helsinki ${weatherEmoji}. I focus 
        on building great websites and applications.`;

}

executeUpdate();

